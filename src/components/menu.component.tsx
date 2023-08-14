import { menuItem } from "@/@types/menu.d";
import { Fragment, useEffect, useState } from "react";
import { Nav, NavDropdown } from "react-bootstrap";

type MenuProps = {
    title: string;
    alignment: string;
};

type DropdownProps = {
    key: number;
    item: menuItem;
};

const DropdownItem = (props: DropdownProps) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const handleOpen = () => {
        setIsOpen(true);
    };

    const handleClose = () => {
        setIsOpen(false);
    };

    return (
        <NavDropdown key={props.key} title={props.item.title}>
            {props.item.items.map((item: menuItem, index: number) => {
                return (
                    <Nav.Link key={index} href={item.href} target={item.target ?? "_top"}>
                        {item.title}
                    </Nav.Link>
                );
            })}
        </NavDropdown>
    );
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
        if (resp.ok) {
            let m = await resp.json();
            setMenu(m);
        }
    };

    useEffect(() => {
        getMenu();
    }, []);

    if (menu) {
        return (
            <Nav className={props.alignment}>
                {menu.map((item: menuItem, index: number) => {
                    return (
                        <Fragment key={index}>
                            {item.items?.length > 0 ? (
                                <DropdownItem key={index} item={item} />
                            ) : (
                                <Nav.Link key={index} href={item.href} target={item.target ?? "_top"}>
                                    {item.title}
                                </Nav.Link>
                            )}
                        </Fragment>
                    );
                })}
            </Nav>
        );
    }

    return null;
};
