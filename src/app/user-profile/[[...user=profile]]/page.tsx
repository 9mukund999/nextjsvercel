
import { UserProfile } from "@clerk/nextjs";
export default function UserProfilePage() {
    return (
        <>
            <h1><UserProfile path="/user-profile" /></h1>
        </>
    );
}