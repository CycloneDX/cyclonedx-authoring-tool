<template>
  <div class="animated fadeIn">
    <div id="createBomToolbar" class="bs-table-custom-toolbar">
      <b-button size="md" variant="primary" v-b-modal.projectCreateProjectModal>
        <span class="fa fa-plus"></span> {{ $t('message.add_component') }}
      </b-button>
    </div>
    <bootstrap-table
      ref="table"
      :columns="columns"
      :data="data"
      :options="options">
    </bootstrap-table>
  </div>
</template>

<script>
  //import Vue from 'vue'
  //import common from "../../../shared/common";
  //import xssFilters from "xss-filters";

  export default {
    components: {
    },
    methods: {
      refreshTable: function() {
        this.$refs.table.refresh({
          silent: true
        });
      }
    },
    data() {
      return {
        columns: [
          {
            title: this.$t('message.group'),
            field: "group",
            sortable: true
          },
          {
            title: this.$t('message.name'),
            field: "name",
            sortable: true
          },
          {
            title: this.$t('message.version'),
            field: "version",
            sortable: true
          }
        ],
        data: [],
        options: {
          search: true,
          showColumns: true,
          showRefresh: true,
          pagination: true,
          silentSort: false,
          sidePagination: 'client',
          queryParamsType: 'pageSize',
          pageList: '[10, 25, 50, 100]',
          pageSize: 10,
          icons: {
            refresh: 'fa-refresh'
          },
          toolbar: '#createBomToolbar'
        }
      };
    }
  };
</script>
