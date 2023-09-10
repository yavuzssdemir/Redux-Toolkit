# Redux Toolkit 


- Hem reducer hem de action için farklı dosyalarda oluşturmak yerine bir slice dosyasında oluşturmamıza olanak sağlayan, daha az kodlama ile aynı zamanda bizim için switch-case yapısını ve aksiyonları oluşturarak kod kalabalığının yanı sıra bizi uzun kodlamalardan kaynaklı zaman kaybından da kurtarmış oluyor. Dahili olarak thunk beraberinde geliyor, Devtools eklentisi sayesinde de proje geliştirme aşamasında store'u, reducer ve aksiyonları izlenimi kolaydır; veri yönetimimiz kolaydır. Proje içerisinde gördüğünüz yapı ise sizin için en basit haliyle bunun ufak bir örneğidir.

Adım 1: Proje Başlatma

Öncelikle bir React projesi oluşturun veya mevcut bir React projesinde çalışıyorsanız devam edin.

npx create-react-app my-redux-app
cd my-redux-app

Adım 2: Redux Toolkit Kurulumu
React-Redux Toolkit'ı projenize eklemek için aşağıdaki komutu kullanabilirsiniz:

npm install @reduxjs/toolkit react-redux

Adım 3: Store Oluşturma
Redux Toolkit, store'u oluşturmanızı ve yapılandırmanızı kolaylaştırır. src dizini içinde bir store.js dosyası oluşturun. Gerekli importları aşağıda bulunan örnek gibi yapabilirsiniz.

// src/app/store.js
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/counterSlice";// Bu örnek için bir dilim eklemeyi varsayalım

export const store = configureStore({
  reducer: {
    counter: counterReducer, // Daha fazla dilim eklemek için buraya ekleyebilirsiniz
  },
});

Adım 4: Dilim (Slice) Oluşturma

Her bir veri parçasını temsil eden dilimler oluşturmanız gerekecek. Örneğin, bir sayaç uygulaması için bir dilim oluşturabilirsiniz. src/features dizini içinde counterSlice.js adında bir dosya oluşturun ve aşağıdaki gibi içeriği ekleyin:

// src/features/counterSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
  },
});

export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;

Adım 5: Redux Provider Eklemek

Redux kullanmak için, <Provider> bileşenini kullanarak Redux store'unuzu uygulamanıza eklemeniz gerekir. src/index.js dosyasını açın ve <Provider> ekleyin:

// src/index.js
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { store } from "./store"; // Redux store'u içe aktarın
import "./index.css";
import App from "./App";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

Adım 6: Redux Dilimlerini Kullanma
Artık Redux dilimlerinizi kullanabilirsiniz. Örneğin, bir bileşende sayaç dilimini kullanmak için aşağıdaki gibi yapabilirsiniz:

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "./features/counterSlice"; // Kullandığınız dilimi içe aktarın

function App() {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Count: {count}<//h1>

      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  );
}

export default App;


Bu adımları takip ederek, React-Redux Toolkit kullanarak basit bir Redux uygulaması oluşturabilirsiniz. Daha fazla dilim eklemek ve uygulamanızı daha karmaşık hale getirmek mümkündür.




- Kütüphaneler:

-- @reduxjs/toolkit
-- react-redux
