import React from 'react';
import NavbarLayout from '@theme/Navbar/Layout';
import NavbarContent from '@theme/Navbar/Content';
import AskCookbook from '@cookbookdev/docsbot/react';

export default function Navbar() {
  return (
    <NavbarLayout>
      <NavbarContent />
      <AskCookbook apiKey="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NjRiODgyNWFhNDVjOTc3MDNiM2I5MjUiLCJpYXQiOjE3MTYyMjYwODUsImV4cCI6MjAzMTgwMjA4NX0.WekaDFPvBFAUtWgLxw91WqNya3eO5LQxRnrOGO69lTY" />
    </NavbarLayout>
  );
}
