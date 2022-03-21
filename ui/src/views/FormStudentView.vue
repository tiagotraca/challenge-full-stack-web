<template>
  <div>
    <PageTitle :title="title" />
    <v-container>
      <form>
        <v-text-field
          v-model="name"
          :error-messages="nameErrors"
          label="Nome"
          required
          @input="$v.name.$touch()"
          @blur="$v.name.$touch()"
        ></v-text-field>
        <v-text-field
          v-model="email"
          :error-messages="emailErrors"
          label="E-mail"
          required
          @input="$v.email.$touch()"
          @blur="$v.email.$touch()"
        ></v-text-field>
        <v-text-field
          :disabled="$route.params.id"
          v-model="academicRegister"
          :error-messages="academicRegisterErrors"
          label="Registro Academico"
          required
          @input="$v.academicRegister.$touch()"
          @blur="$v.academicRegister.$touch()"
        ></v-text-field>
        <v-text-field
          :disabled="$route.params.id"
          v-model="cpf"
          :error-messages="cpfErrors"
          label="CPF"
          required
          @input="$v.cpf.$touch()"
          @blur="$v.cpf.$touch()"
        ></v-text-field>

        <v-btn class="mr-4" @click="submit" :disabled="this.$v.$invalid">
          salvar
        </v-btn>
        <v-btn @click="cancel"> Cancelar </v-btn>
      </form>
    </v-container>
  </div>
</template>
<script>
import students from "@/services/students";
import { validationMixin } from "vuelidate";
import { required, email } from "vuelidate/lib/validators";
import PageTitle from "@/components/PageTitle.vue";

export default {
  components: { PageTitle },

  mixins: [validationMixin],

  validations: {
    name: { required },
    email: { required, email },
    academicRegister: { required },
    cpf: { required },
  },

  data: () => ({
    title: "Cadastro de Alunos",
    name: "",
    email: "",
    cpf: "",
    academicRegister: "",
  }),

  computed: {
    nameErrors() {
      const errors = [];
      if (!this.$v.name.$dirty) return errors;
      !this.$v.name.required && errors.push("Name is required.");
      return errors;
    },
    emailErrors() {
      const errors = [];
      if (!this.$v.email.$dirty) return errors;
      !this.$v.email.email && errors.push("Must be valid e-mail");
      !this.$v.email.required && errors.push("E-mail is required");
      return errors;
    },
    cpfErrors() {
      const errors = [];
      if (!this.$v.cpf.$dirty) return errors;
      !this.$v.cpf.required && errors.push("E-mail is required");
      return errors;
    },
    academicRegisterErrors() {
      const errors = [];
      if (!this.$v.academicRegister.$dirty) return errors;
      !this.$v.academicRegister.required &&
        errors.push("Registro Academico is required");
      return errors;
    },
  },
  created() {
    if (this.$route.params.id) {
      this.title = "Atualizar Aluno";
      students
        .getStudentById(this.$route.params.id)
        .then((value) => {
          console.log(value.data);
          this.name = value.data.name;
          this.email = value.data.email;
          this.cpf = value.data.cpf;
          this.academicRegister = value.data.academic_register;
        })
        .catch((e) => {
          this.errors.push(e);
        });
    }
  },

  methods: {
    submit() {
      const student = {
        name: this.name,
        email: this.email,
        cpf: this.cpf,
        academicRegister: this.academicRegister,
      };
      if (this.$route.params.id) {
        student.id = this.$route.params.id;
        students.updateStudent(student).then((res) => {
          if (res.status === 200) {
            this.$store.dispatch("modifyState", true);
            this.$store.dispatch(
              "modifyMessage",
              "Aluno Atualizado com sucesso"
            );
            this.$store.dispatch("modifyColor", "success");
            this.$router.push("/");
          } else {
            this.$store.dispatch("modifyState", true);
            this.$store.dispatch("modifyMessage", "Falha ao Atualizar");
            this.$store.dispatch("modifyColor", "error");
          }
        });
      } else {
        students.createStudent(student).then((res) => {
          if (res.status === 201) {
            this.$store.dispatch("modifyState", true);
            this.$store.dispatch(
              "modifyMessage",
              "estudante salvo com sucesso"
            );
            this.$store.dispatch("modifyColor", "success");
            this.$router.push("/");
          }
        });
      }
    },
    cancel() {
      this.$router.push("/");
    },
  },
};
</script>
