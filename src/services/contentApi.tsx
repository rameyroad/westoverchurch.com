export const getContent = async (contentId: string) => {
    const myHeaders = new Headers({
        Authorization: 'Basic R2xvYmFsV2ViVXNlcjo3NENGRDFEQkFBRTk0Mzk4QjY1QUE0RjUzNzYzNUIxMw==',
    });
    const url = `https://rameyroad-westover-content.azurewebsites.net/api/cms_content/${contentId}/all`;
    const resp = await fetch(url, {
        headers: myHeaders,
        next: { revalidate: 300 },
    });
    if (resp.ok) {
        const m = await resp.json();
        return m;
    }
    return null;
};

export const getPageByPermalink = async (permalink: string, site: string) => {
    const myHeaders = new Headers({
        Authorization: 'Basic R2xvYmFsV2ViVXNlcjo3NENGRDFEQkFBRTk0Mzk4QjY1QUE0RjUzNzYzNUIxMw==',
    });
    const url = `https://rameyroad-westover-content.azurewebsites.net/api/content/${permalink}?siteId=${site}`;
    const resp = await fetch(url, {
        headers: myHeaders,
        next: { revalidate: 300 },
    });
    if (resp.ok) {
        const m = await resp.json();
        return m;
    }
    return null;
};
