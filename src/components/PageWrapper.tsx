import * as React from "react";
import TopBar from "./TopBar";
import Container from "@material-ui/core/Container";

interface PageWrapperProps {
  title: string;
}

const PageWrapper: React.FC<PageWrapperProps> = (props) => {
  return (
    <>
      <TopBar title={props.title} />
      <Container>
        {props.children}
      </Container>
    </>
  );
}

export default PageWrapper