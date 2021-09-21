import Head from "next/head";
import React from "react";
import styled from "styled-components";

type PageProps = {
    title: string;
    description: string;
};

const PageContainer = styled.div`
  //background: yellowgreen; 
  //font-family: Inconsolata,serif;
  
  color: black;
`
const Page: React.FC<PageProps> = ({title, description, children}) => {
    return (
        <PageContainer>
            <Head>
                <title>{title}</title>
                <meta name="description" content={description}/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            {children}
        </PageContainer>
    );
};

export default Page;
