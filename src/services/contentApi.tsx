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

export const getSiteMap = async (siteId: string) => {
    const myHeaders = new Headers({
        Authorization: 'Basic R2xvYmFsV2ViVXNlcjo3NENGRDFEQkFBRTk0Mzk4QjY1QUE0RjUzNzYzNUIxMw==',
    });
    const url = `https://rameyroad-westover-content.azurewebsites.net//api/content/sitemap?siteId=${siteId}`;

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

export const getPageBySlug = async (permalink: string, site: string) => {
    if (permalink == null) return null;

    const myHeaders = new Headers({
        Authorization: 'Basic R2xvYmFsV2ViVXNlcjo3NENGRDFEQkFBRTk0Mzk4QjY1QUE0RjUzNzYzNUIxMw==',
    });
    const url = `https://rameyroad-westover-content.azurewebsites.net/api/content/${permalink}?siteId=${site}`;
    const resp = await fetch(url, {
        headers: myHeaders,
        next: { revalidate: 300 },
    });
    if (resp.ok) {
        try {
            const m = await resp.json();
            return m;
        } catch (err) {
            console.log('error', err);
        }
    }
    return null;
};

export const getAllBlogPosts = async () => {
    const myHeaders = new Headers({
        Authorization: 'Basic R2xvYmFsV2ViVXNlcjo3NENGRDFEQkFBRTk0Mzk4QjY1QUE0RjUzNzYzNUIxMw==',
    });
    const url = 'https://rameyroad-westover-content.azurewebsites.net/api/content/blog';
    const resp = await fetch(url, {
        headers: myHeaders,
        next: { revalidate: 300 },
    });
    if (resp.ok) {
        try {
            const m = await resp.json();
            return m;
        } catch (err) {
            console.log('error', err);
        }
    }
    return null;
};

export const getBlogPostBySlug = async (slug: string) => {
    const myHeaders = new Headers({
        Authorization: 'Basic R2xvYmFsV2ViVXNlcjo3NENGRDFEQkFBRTk0Mzk4QjY1QUE0RjUzNzYzNUIxMw==',
    });
    const url = `https://rameyroad-westover-content.azurewebsites.net/api/content/blog/${slug}`;
    const resp = await fetch(url, {
        headers: myHeaders,
        next: { revalidate: 300 },
    });
    if (resp.ok) {
        try {
            const m = await resp.json();
            return m;
        } catch (err) {
            console.log('error', err);
        }
    }
    return null;
};

export const getPublicEvents = async () => {
    const myHeaders = new Headers({
        Authorization: 'Basic R2xvYmFsV2ViVXNlcjo3NENGRDFEQkFBRTk0Mzk4QjY1QUE0RjUzNzYzNUIxMw==',
    });
    const url = 'https://rameyroad-westover-content.azurewebsites.net/api/Events';
    const resp = await fetch(url, {
        headers: myHeaders,
        next: { revalidate: 300 },
    });
    if (resp.ok) {
        try {
            const m = await resp.json();
            return m;
        } catch (err) {
            console.log('error', err);
        }
    }
    return null;
};

export const getMinistryEvents = async (ministryId: string) => {
    const myHeaders = new Headers({
        Authorization: 'Basic R2xvYmFsV2ViVXNlcjo3NENGRDFEQkFBRTk0Mzk4QjY1QUE0RjUzNzYzNUIxMw==',
    });
    const url = `https://rameyroad-westover-content.azurewebsites.net/api/Events/by-ministry-id/${ministryId}`;
    const resp = await fetch(url, {
        headers: myHeaders,
        next: { revalidate: 300 },
    });
    if (resp.ok) {
        try {
            const m = await resp.json();
            return m;
        } catch (err) {
            console.log('error', err);
        }
    }
    return null;
};
