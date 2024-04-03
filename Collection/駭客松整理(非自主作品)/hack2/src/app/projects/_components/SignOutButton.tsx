// . Call the signOut() function when the button is clicked
// hint: You may want to change the first line of this file
"use client"
import { signOut } from "next-auth/react";

import { Button } from "@/components/ui/button";
import { publicEnv } from "@/lib/env/public";

export default function SignOutButton() {
  const handleSignOut = ()=>{
    signOut({ callbackUrl: `${window.location.origin}`})
  }
  return (
    <Button 
      variant={"outline"} 
      data-testid="sign-out-button"
      onClick={handleSignOut}
    >Sign Out</Button>
  );
}
// TODO: 4. end
