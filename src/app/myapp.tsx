import * as React from "react";
import Panel from "bloomer/lib/components/Panel/Panel";
import PanelHeading from "bloomer/lib/components/Panel/PanelHeading";
import PanelBlock from "bloomer/lib/components/Panel/PanelBlock";
import PanelIcon from "bloomer/lib/components/Panel/PanelIcon";
import Section from "bloomer/lib/layout/Section";
import Container from "bloomer/lib/layout/Container";

export interface MyAppState {

}

export class MyApp extends React.Component<{}, MyAppState> {
    render() {
        return (
            <Section>
                <Container>
                    <Panel>
                        <PanelHeading>Hello World!</PanelHeading>
                        <PanelBlock>
                            <PanelIcon className="fa fa-book" />
                            <p>RTF: <a href="https://bloomer.js.org/#/documentation/overview/start" target="_blank">here!</a></p>
                        </PanelBlock>
                    </Panel>
                </Container>
            </Section>
        );
    }
}
