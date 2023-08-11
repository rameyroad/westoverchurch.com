import { menuItem } from "@/@types/menu.d";
import { useEffect, useState } from "react";
import { Nav, NavDropdown } from "react-bootstrap";

type MenuProps = {
    title: string;
    alignment: string;
};

export const Menu = (props: MenuProps) => {
    const [menu, setMenu] = useState<Array<menuItem> | null>(null);

    const getMenu = async () => {
        let myHeaders = new Headers({
            Authorization: "Basic R2xvYmFsV2ViVXNlcjo3NENGRDFEQkFBRTk0Mzk4QjY1QUE0RjUzNzYzNUIxMw==",
        });

        let url = `https://rameyroad-westover-content.azurewebsites.net/api/cms_content/${props.title}/all`;
        let resp = await fetch(url, {
            headers: myHeaders,
            next: { revalidate: 300 },
        });
        let m = await resp.json();
        setMenu(m);
    };

    useEffect(() => {
        getMenu();
    }, []);

    if (menu) {
        return (
            <Nav className={props.alignment}>
                {menu.map((item: menuItem, index: number) => {
                    if (item.items?.length > 0) {
                        return (
                            <NavDropdown key={index} title={item.title} id="basic-nav-dropdown">
                                {item.items.map((item: menuItem, index: number) => {
                                    return <Nav.Link href={item.slug}>{item.title}</Nav.Link>;
                                })}
                            </NavDropdown>
                        );
                    } else {
                        return (
                            <Nav.Link key={index} href={item.slug}>
                                {item.title}
                            </Nav.Link>
                        );
                    }
                })}
            </Nav>
        );
    }

    return null;
};
