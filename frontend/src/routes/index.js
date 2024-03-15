import { createRouter, createWebHistory } from 'vue-router';

//  COMPONENT
import NavBar from './../components/Navbar.vue';

//  VIEWS
import telaHome from './../views/Home.vue';
import telaSobre from './../views/Sobre.vue';
import telaCadastroProduto from '../views/produto/components/TelaCadastraProduto.vue';
import telaProduto from '../views/produto/TelaProduto.vue';
import telaAtualizaProduto from '../views/produto/components/TelaAtualizaProduto.vue';
import telaDeletaProduto from '../views/produto/components/TelaDeletaProduto.vue';


const routes = [
  {
    path: '/',
    name: 'App',
    components: {
      default: NavBar,
      telaHome: telaHome
    },
    meta: {
      title: 'Home'
    }
  },
  {
    path: '/sobre',
    name: 'Sobre',
    components: {
      default: NavBar,
      telaSobre: telaSobre
    },
    meta: {
      title: 'Sobre'
    }
  },
  {
    path: '/produtos',
    name: 'Produto',
    components: {
      default: NavBar,
      telaProduto: telaProduto
    },
    meta: {
      title: 'Produtos'
    }
  },
  {
    path: '/produtos/Atualiza/:id',
    name: 'telaAtualizaProduto',
    components: {
      default: NavBar,
      telaAtualizaProduto: telaAtualizaProduto
    },
    meta: {
      title: 'Atualiza'
    }
  },
  {
    path: '/produtos/cadastro/',
    name: 'telaCadastroProduto',
    components: {
      default: NavBar,
      telaCadastroProduto: telaCadastroProduto
    },
    meta: {
      title: 'Cadastro'
    }
  },
  {
    path: '/produtos/deleta',
    name: 'telaDeletaProduto',
    components: {
      default: NavBar,
      TelaDeletaProduto: telaDeletaProduto
    },
    meta: {
      title: 'Deleta'
    }
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

router.beforeEach((to, from, next) => {
  document.title = to.meta.title || 'Compre Legal';
  next();
});

export default router;