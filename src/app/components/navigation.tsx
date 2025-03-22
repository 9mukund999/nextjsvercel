
import { SignOutButton, SignInButton, UserButton, UserProfile, SignedOut, SignedIn, SignIn } from "@clerk/nextjs";
import Link from "next/link";
export const Navigation = () => {
    return (
        <nav>
            <ul>
                <SignedOut>
                <SignInButton mode="modal"/>
                {/* <UserButton/> */}
                </SignedOut>

                <SignedIn>
                <Link href="/user-profile">profile</Link>
                <SignOutButton/>
                </SignedIn>

                {/* <UserProfile/> */}
                <li><a href="#">Contact</a></li>
            </ul>
        </nav>
    );
}