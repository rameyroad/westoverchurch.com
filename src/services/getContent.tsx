export const getContent = async (contentId: string) => {
  let myHeaders = new Headers({
    Authorization: 'Basic R2xvYmFsV2ViVXNlcjo3NENGRDFEQkFBRTk0Mzk4QjY1QUE0RjUzNzYzNUIxMw==',
  });
  let url = `https://rameyroad-westover-content.azurewebsites.net/api/cms_content/${contentId}/all`;
  let resp = await fetch(url, {
    headers: myHeaders,
    next: { revalidate: 300 },
  });
  if (resp.ok) {
    let m = await resp.json();
    return m;
  }
  return null;
};
