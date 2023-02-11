import { Button, Typography } from "@mui/material";
import Link from "next/link";
import React, { useState } from "react";
import NavItem from "./NavItem";

const NavBar: React.FunctionComponent = () => {
    const [selectedHref, setSelectedHref] = useState("/")
    const navItems: {href: string, text: string}[] = [
        {href: "/", text: "Home"},
        {href: "/about", text: "About"},
        {href: "/help", text: "Help"},
        {href: "/pricing", text: "Pricing"},
    ]
    return (
        <nav className='flex items-center flex-wrap justify-between bg-[#50577A] gap-4 p-3 text-white'>
            <div className="flex items-center flex-wrap">
            {
                navItems.map(c => (
                    <NavItem key={c.href} onClick={(_e: any) => setSelectedHref(c.href)} isSelected={c.href===selectedHref} href={c.href}>{c.text}</NavItem>
                ))
            }
            </div>
            <Link href="/register">
            <Button variant="contained" className="bg-blue rounded-lg text-white">
                <Typography variant="button">Sign up</Typography>
            </Button>
            </Link>
        </nav>
    )
}

export default NavBar