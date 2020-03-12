import * as React from "react";
import { Panel, Section, Container } from "react-bulma-components";

export interface MyAppState {

}

export class MyApp extends React.Component<{}, MyAppState> {
    render() {
        return (
            <Section>
                <Container>
                    <Panel>
                        <Panel.Header>Hello World!</Panel.Header>
                        <Panel.Block>
                            <Panel.Icon className="fa fa-book" />
                            <p>It works!</p>
                        </Panel.Block>
                    </Panel>
                </Container>
            </Section>
        );
    }
}
