import { DSProvider } from "@synerise/ds-core";
import Layout, { Page } from "@synerise/ds-layout";
import Grid from "@synerise/ds-grid";
import Card from "@synerise/ds-card";
import LayoutAppMenu from "./components/AppMenu";
import LayoutNavbar from "./components/Navbar";
import * as S from "./components/Layout.styles";
import CardSelect from "@synerise/ds-card-select";

function App() {
  return (
    <DSProvider>
      <Page
        //@ts-ignore
        appMenu={<LayoutAppMenu />}
        navBar={<LayoutNavbar />}
      >
        <Layout
          // header={<WithTheme(PageHeader) onGoBack={function noRefCheck(){}} title="Page name"/>}
          left={<S.Placeholder />}
          right={<S.Placeholder />}
        >
          <Grid>
            <Grid.Item lg={12} md={8} sm={8} xl={16} xs={4} xxl={24}>
              <Card>
                <S.Placeholder />
                <CardSelect
              title="Card"
              description="With description"
              value={true}
             // icon={<IconComponent />}
             
              tickVisible
            />
              </Card>
            </Grid.Item>
          </Grid>
        </Layout>
      </Page>
    </DSProvider>
  );
}

export default App;
