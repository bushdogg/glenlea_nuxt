<template>
    <div class="section">
        <div class="container">
          <div class="col-sm-12 ml-auto mr-auto">
              <card class="card-plain">
                  <div class="row">
                      <div class="col-sm-12">
                        <n-button
                         @click.native="handleAdd()"
                        >Add</n-button>
                        <el-table
                          :data="tableData.data"
                          style="width: 100%">
                        <el-table-column min-width="70"
                                         prop="id"
                                         align="left"
                                         label="ID"
                                         >
                        </el-table-column>
                        <el-table-column min-width="200"
                                        prop="title"
                                        align="left"
                                        label="Title">
                        </el-table-column>
                        <el-table-column min-width="150"
                                        align="left"
                                        prop="name"
                                        label="Name">
                        </el-table-column>
                        <el-table-column min-width="150"
                                        prop="phone"
                                        align="left"
                                        label="Phone">
                        </el-table-column>
                        <el-table-column min-width="150"
                                        prop="email"
                                        align="left"
                                        label="Email">
                        </el-table-column>
                        <el-table-column min-width="150"
                                        header-align="right"
                                        label="Actions">
                          <div slot-scope="{row}" class="text-right table-actions">
                              <el-tooltip content="Edit"
                                          :open-delay="300"
                                          placement="top">
                                  <n-button
                                    type="success"
                                    size="sm"
                                    icon
                                    @click.native="handleEdit(row)"
                                    >
                                      <i class="el-icon-edit"></i>
                                  </n-button>
                              </el-tooltip>
                              <el-tooltip content="Delete"
                                          :open-delay="300"
                                          placement="top">
                                  <n-button
                                    type="danger"
                                    size="sm"
                                    icon
                                    @click.native="handleDelete(row)"
                                    >
                                      <i class="now-ui-icons ui-1_simple-remove"></i>
                                  </n-button>
                              </el-tooltip>
                          </div>
                        </el-table-column>
                        </el-table>
                      </div>
                  </div>
              </card>
          </div>
        </div>

        <modal :show.sync="modals.committee"
               class="modal-primary"
               :showClose="false"
               >
                <div class="card card-plain" data-background-color="" slot="base-content">
                    <div class="modal-header justify-content-center">
                        <div class="header header-primary text-center">
                            <div class="logo-container">
                                <img v-lazy="'img/banner-white-background-300-high.jpg'" alt="">
                            </div>
                        </div>
                    </div>
                    <div class="modal-body">
                        <form class="form" method="POST" action="">
                            <div class="card-body">
                                <fg-input class="no-border input-lg"
                                          v-model="committee.id"
                                          readonly
                                          >
                                    <template slot="label">ID</template>
                                </fg-input>
                                <fg-input class="no-border input-lg"
                                          label="Title"
                                          v-model="committee.title"
                                          >
                                </fg-input>
                                <fg-input class="no-border input-lg"
                                          label="Name"
                                          v-model="committee.name"
                                          >
                                </fg-input>
                                <fg-input class="no-border input-lg"
                                          label="E-mail"
                                          v-model="committee.email"
                                          >
                                </fg-input>
                                <fg-input class="no-border input-lg"
                                          label="Phone"
                                          v-model="committee.phone"
                                          >
                                </fg-input>
                            </div>
                        </form>
                    </div>
                    <div class="modal-footer text-center">
                      <n-button
                        @click.native="submitForm()"
                      >
                          Submit
                      </n-button>
                    </div>
                </div>

        </modal>


    </div>

</template>

<script>
import {Card, Button, Checkbox, Comment, FormGroupInput, Pagination, Modal} from '@/components';
import {Table, TableColumn, Tooltip, Form, FormItem, Input} from 'element-ui';
export default {
  components: {
      Card,
      Modal,
      [Table.name]: Table,
      [TableColumn.name]: TableColumn,
      [Tooltip.name]: Tooltip,
      [Checkbox.name]: Checkbox,
      [Button.name]: Button,
      [FormGroupInput.name]: FormGroupInput,
      [Pagination.name]: Pagination,
      [Form.name]: Form,
      [FormItem.name]: FormItem,
      [Input.name]: Input
  },
  data() {
    return {
      newRecord: false,
      tableData: [],
      committee: {
        id: 0,
        title: '',
        name: '',
        email: '',
        phone: ''
      },
      modals: {
        committee: false
      }
    }
  },
  methods: {
    handleEdit(row) {
      this.newRecord = false;

      this.committee.id = row.id;
      this.committee.title = row.title;
      this.committee.name = row.name;
      this.committee.email = row.email;
      this.committee.phone = row.phone;

      this.modals.committee = true;
    },
    handleAdd() {
      this.newRecord = true;
      this.committee.id = 0;
      this.committee.title = '';
      this.committee.name = '';
      this.committee.email = '';
      this.committee.phone = '';

      this.modals.committee = true;
    },
    submitForm() {
      if (this.newRecord === false) {
        this.$axios.post( this.$axios.defaults.baseURL + '/committee/update.php', this.committee)
        .then((res) => {
          //success action
          this.refresh();
          this.modals.committee = false;
        })
        .catch((error) => {
            // error.response.status Check status code
        }).finally(() => {
            //Perform action in always
        });
      } else {
        this.$axios.post( this.$axios.defaults.baseURL + '/committee/create.php', this.committee)
        .then((res) => {
          //success action
          this.refresh();
          this.modals.committee = false;
        })
        .catch((error) => {
            // error.response.status Check status code
        }).finally(() => {
            //Perform action in always
        });
      }
    },
    handleDelete(row) {
      this.committee.id = row.id;
      this.$axios.delete( this.$axios.defaults.baseURL + '/committee/delete.php', {data: this.committee } )
        .then((res) => {
          //success action
          this.refresh();
        })
        .catch((error) => {
            // error.response.status Check status code
            console.log(error);
        }).finally(() => {
            //Perform action in always
        });
    },
    refresh() {
      this.$fetch()
    }
  },
  //fetch
  async fetch() {
    this.tableData = await fetch(
      this.$axios.defaults.baseURL + '/committee/read.php'
    ).then(res => res.json())
  },
  // call fetch only on client-side
  fetchOnServer: false
  }
</script>

<style scoped lang="scss">
</style>