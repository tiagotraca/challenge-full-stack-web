<template>
  <v-data-table
    :headers="headers"
    :items="students"
    sort-by="calories"
    class="elevation-1"
  >
    <template v-slot:top>
      <PageTitle title="Consulta de Alunos" />
      <v-toolbar flat>
        <v-text-field label="Digite a busca"></v-text-field>
        <v-divider class="mx-4" inset vertical></v-divider>
        <v-btn color="primary" dark class="mb-2"> pesquisar </v-btn>
        <v-spacer></v-spacer>
        <v-btn color="primary" dark class="mb-2" to="/cadastrar">
          Criar Aluno
        </v-btn>
        <v-dialog v-model="dialogDelete" max-width="500px">
          <v-card>
            <v-card-title class="text-h5"
              >Tem certeza que deseja deletar esse item?</v-card-title
            >
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="closeDelete"
                >Cancel</v-btn
              >
              <v-btn color="blue darken-1" text @click="deleteItemConfirm"
                >OK</v-btn
              >
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-toolbar>
      <v-divider></v-divider>
    </template>
    <!-- eslint-disable-next-line  -->
    <template v-slot:item.actions="{ item }">
      <v-icon small class="mr-2" @click="editItem(item)"> mdi-pencil </v-icon>
      <v-icon small @click="deleteItem(item)"> mdi-delete </v-icon>
    </template>
    <template v-slot:no-data>
      <v-btn color="primary" @click="initialize"> Reset </v-btn>
    </template>
  </v-data-table>
</template>

<script>
import students from "@/services/students";
import PageTitle from "./PageTitle.vue";

export default {
  components: {
    PageTitle,
  },
  data: () => ({
    dialogDelete: false,
    snackbar: false,
    timeout: 3000,
    message: "Deletado com Sucesso",
    headers: [
      {
        text: "Registro Academico",
        align: "start",
        value: "academic_register",
      },
      { text: "Nome", value: "name" },
      { text: "Cpf", value: "cpf" },
      { text: "Actions", value: "actions", sortable: false },
    ],
    students: [],
    editedIndex: -1,
    defaultItem: {
      name: "",
      calories: 0,
      fat: 0,
      carbs: 0,
      protein: 0,
    },
  }),

  watch: {
    dialogDelete(val) {
      val || this.closeDelete();
    },
  },

  created() {
    this.initialize();
  },

  methods: {
    initialize() {
      students
        .getStudents()
        .then((value) => {
          this.students = value.data;
        })
        .catch((e) => {
          this.errors.push(e);
        });
    },

    editItem(item) {
      this.$router.push("/update/" + item.id);
    },

    deleteItem(item) {
      this.editedIndex = item.id;
      this.dialogDelete = true;
    },

    deleteItemConfirm() {
      students.deleteStudent(this.editedIndex, 1).then((res) => {
        this.isDelete = false;
        if (res.status === 200) {
          this.$store.dispatch("modifyState", true);
          this.$store.dispatch("modifyMessage", "Aluno deletado com sucesso");
          this.$store.dispatch("modifyColor", "success");
        } else {
          this.$store.dispatch("modifyState", true);
          this.$store.dispatch("modifyMessage", "Falha ao deletar registro");
          this.$store.dispatch("modifyColor", "error");
        }
      });

      students
        .getStudents()
        .then((value) => {
          this.students = value.data;
        })
        .catch((e) => {
          this.errors.push(e);
        });
      this.closeDelete();
    },

    closeDelete() {
      this.dialogDelete = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },
  },
};
</script>
