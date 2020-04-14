<template>
  <div class="animated fadeIn">

    <b-card header="CycloneDX Authoring Tool (CAT)" header-tag="header">
      <img class="d-lg-inline" style="margin-bottom: 50px" src="@/assets/img/brand/logo-aqua.svg" width="350" alt="CycloneDX Logo"/>
      <br/>
      <p>
        CycloneDX is a lightweight software bill-of-materials (SBOM) specification designed for use in application
        security contexts and supply chain component analysis.
      </p>
      <p>
        The CycloneDX Authoring Tool (CAT) is an experimental user interface for manually creating, editing, and
        viewing CycloneDX SBOMs
      </p>
    </b-card>


  </div>
</template>

<script>
  import common from "../shared/common"
  import { Callout } from '@coreui/vue'

  export default {
    name: 'welcome',
    components: {
      Callout,
    },
    data() {
      return {

      }
    }
  }
</script>

<style>
  /* IE fix */
  #card-chart-01, #card-chart-02 {
    width: 100% !important;
  }
</style>
