"use client";
import {
  Button,
  CloseButton,
  Drawer,
  Portal,
  Container,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";

export default function Home() {
  const [open, setOpen] = useState(false);
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch("/api/pokemones?token=ksgfkjwgfhdvhdshviea83y4") // Relative URL works for internal routes
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <Container>
      <div>
        <div>
          {data
            ? data.cartas.map((pok) => <p key={pok.nombre}>{pok.nombre}</p>)
            : "Loading"}
        </div>
        <Button onClick={() => setOpen(!open)}>Open/close</Button>
      </div>
      <Drawer.Root open={open} onOpenChange={(e) => setOpen(e.open)}>
        <Drawer.Trigger asChild>
          <Button variant="outline" size="sm">
            Open Drawer
          </Button>
        </Drawer.Trigger>
        <Portal>
          <Drawer.Backdrop />
          <Drawer.Positioner>
            <Drawer.Content>
              <Drawer.Header>
                <Drawer.Title>Drawer Title</Drawer.Title>
              </Drawer.Header>
              <Drawer.Body>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </Drawer.Body>
              <Drawer.Footer>
                <Button variant="outline">Cancel</Button>
                <Button>Save</Button>
              </Drawer.Footer>
              <Drawer.CloseTrigger asChild>
                <CloseButton size="sm" />
              </Drawer.CloseTrigger>
            </Drawer.Content>
          </Drawer.Positioner>
        </Portal>
      </Drawer.Root>
    </Container>
  );
}
