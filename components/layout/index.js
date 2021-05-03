import Head from "next/head";

const Layout = ({ children, title, description }) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta name='description' content={description} />
    </Head>
    <div className='container'>I am header</div>
    {children}
  </div>
);

export default Layout;
