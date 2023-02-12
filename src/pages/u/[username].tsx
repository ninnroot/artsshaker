import DirectoryContainer from "@/components/directory/DirectoryContainer";
import IDirectory from "@/types/directory";

import { Typography } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect } from "react";

const Profile: React.FunctionComponent = () => {
    const router = useRouter();

    const {username} = router.query;

    const directories: IDirectory[] = [
        {href: "https://instagram.com", displayText: "instagram"},
        {href: "https://facebook.com", displayText: "facebook"},
        {href: "https://linkedin.com", displayText: "linkedin"},
    ]

    return (
        <>
        <div className="flex flex-col justify-start items-center bg-gray h-[100vh] text-white">
        <Image src="https://avatars.githubusercontent.com/u/70014160" width={100} height={100} alt="user profile" className="rounded-[50%] border-2 border-solid border-white"></Image>
        <Typography variant="h3" className="mb-5 p-3">@{username}</Typography>
        <DirectoryContainer directories={directories}></DirectoryContainer>
        </div>
        </>
    )
}

export default Profile;