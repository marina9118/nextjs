/** @type {import('next').NextConfig} */
const nextConfig = {
    redirects:async()=>{
        return [
            {
                source:"/redirect",
                destination:"/",
                permanent:false
            }
        ]
    },
    // output:"export" // to make html of this folder after define just run npm run build it generate out folder under this html pages generated
};

export default nextConfig;
