  <template>
  <div>
    <center>
      <b-card class="signin">
        <b-col>
          <b-col>
            <b-col>
              <img src="/img/whiteeagle.png" alt="Icon" class="size-img" />
            </b-col>
            <b-col>
              <h4 class="mt-3">Entrar</h4>
            </b-col>
          </b-col>
          <b-row>
            <b-input-group prepend="Username" v-model="usuario">
              <b-form-input></b-form-input>
            </b-input-group>
          </b-row>
          <b-row>
            <b-input-group prepend="Password" v-model="senha" class="mt-3">
              <b-form-input></b-form-input>
            </b-input-group>
          </b-row>
          <b-row>
            <b-button variant="light" class="mt-3 mx-auto w-50" @click="autentificacao">Login</b-button>
          </b-row>
        </b-col>
      </b-card>
    </center>
  </div>
</template>

  <script>
import * as config from "@/config.json";
import axios from "axios";

export default {
  component: {},

  data: _ => {
    return {
      usuario: null,
      senha: null
    };
  },

  beforeMount() {},

  methods: {
    verificaCampos() {
      if (usuario == null || usuario == "") return false;
      if (senha == null || senha == "") return false;
      return true;
    },
    async autentificacao() {
      if (this.verificaCampos()) {
        await axios
          .get(`${config.default.servidor}/authentification/`)
          .then(response => {
            if (response.status == 200) {
              if(this.usuario == response.data.usuario) return true;
              if(this.senha == response.data.senha)return true;
            }
          });
      }
    }
  }
};
</script>

  <style>
.signin {
  justify-content: center !important;
  width: 100%;
  margin-top: 10rem !important;
  max-width: 300px;
  background-color: #FF4019;
}

h4 {
  color: white !important;
}
.size-img {
  max-width: 80px !important;
  max-height: 80px !important;
}


</style>