import Head from "next/head";
import dynamic from "next/dynamic";
import NavBar from "../navbar";
import { Box, Container } from "@chakra-ui/react";
import Footer from "../footer";
import VoxelDogLoader from "../voxel-dog-loader";

const LazyVoxelDog = dynamic(() => import("../voxel-dog"), {
    ssr: false,
    loading: () => <VoxelDogLoader />,
});

const Main = ({ children, router }) => {
    return (
        <Box as="main" pb={8}>
            <Head>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <meta name="author" content="Исхак Ишмахаметов" />
                <meta name="description" content="Front-End разработчик" />
                <link rel="apple-touch-icon" href="apple-touch-icon.png" />
                <link
                    rel="shortcut icon"
                    href="/favicon.ico"
                    type="image/x-icon"
                />
                <meta property="og:title" content="Исхак Ишмахаметов" />
                <meta property="og:image" content="/images/issak2.png" />
                <meta
                    property="og:description"
                    content="Front-End разработчик"
                />
                <title>Исхак Ишмахаметов</title>
            </Head>

            <NavBar path={router.asPath} />

            <Container maxW="container.md" pt={14}>
                <LazyVoxelDog />

                {children}

                <Footer />
            </Container>
        </Box>
    );
};

export default Main;
