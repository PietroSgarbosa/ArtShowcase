<template>
  <div class="app flex-row align-items-center">
    <div class="container">
      <div class="row justify-content-center">
        <b-col cols="6">
          <b-col class="d-flex align-items-center flex-column bd-highlight mb-3">
            <h4 class="mt-auto p-2 bd-highlight">Sign Up</h4>
            <p class="mt-auto p-2 bd-highlight">One step for the new world</p>
          </b-col>
          <b-row>
            <b-input-group prepend="Username" v-model="usuario">
              <b-form-input></b-form-input>
            </b-input-group>
            <b-input-group prepend="Password" v-model="senha" class="mt-3">
              <b-form-input></b-form-input>
            </b-input-group>
            <b-input-group prepend="E-mail" v-model="email" class="mt-3">
              <b-form-input></b-form-input>
            </b-input-group>
            <b-input-group prepend="Confirmar E-mail" v-model="repetiremail" class="mt-3">
              <b-form-input></b-form-input>
            </b-input-group>
            <b-button variant="success" class="mt-3 w-25 botao">Sign Up</b-button>
          </b-row>
        </b-col>
      </div>
    </div>
  </div>
</template>

<script>
import * as config from "@/config.json";

export default {
  component: {},
  data: _ => {
    return {
      usuario: null,
      senha: null,
      email: null,
      repetiremail: null
    };
  }
};
</script>

<style>
.botao {
  margin: 0 auto;
  display: block;
}
</style>