import React from 'react'
import { Provider } from 'react-redux'
import store from './components/redux/store'

import {
  AdaptivityProvider,
  ConfigProvider,
  AppRoot,
  SplitLayout,
  SplitCol,
  View,
  Panel,
  PanelHeader,
  Header,
  Group,
  SimpleCell,
  useAdaptivityConditionalRender
} from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';

import ProductList from "./components/productList/productList"
import PriceBar from "./components/priceBar/priceBar"

import "./style/style.scss"

function App() {
  return (
    <AppRoot>
      <Provider store={store}>
        <SplitLayout 
          style={{ justifyContent: 'center', columnGap: '30px'}}
        > 
          <SplitCol width="75%" maxWidth={750}>
            <ProductList />
          </SplitCol>
          <SplitCol fixed width="25%" maxWidth={250}>
            <Panel>
              <PriceBar />
            </Panel>
          </SplitCol>
        </SplitLayout>
      </Provider>
    </AppRoot>
  );
}

export default App;
