  <template>
  <div>
    <center>
      <b-card class="signin">
        <b-col>
          <b-col>
            <b-col>
              <img src="https://i.ibb.co/sKws48t/Icon-atom.png" alt="Icon" class="size-img" />
            </b-col>
            <b-col>
              <h4 class="mt-3">Sign In</h4>
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
            <b-button variant="primary" class="mt-3 mx-auto w-50" @click="autentificacao">Login</b-button>
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
              this.$router.push("/home");
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
}
.size-img {
  max-width: 50px !important;
  max-height: 50px !important;
}
</style>