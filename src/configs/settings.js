export const domain = 'https://dev-api.hexabase.com';
// export const accessToken = 'accessToken';
export const token = localStorage.getItem('accessToken');
export let workspace_id = '';
if (localStorage.getItem('workspace_name'))
    workspace_id = localStorage.getItem('workspace_name');
else
    workspace_id = '62294f62a7311bddd6de4ff3';