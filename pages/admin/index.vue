<template>
    <div class="section">
        <div class="container">
          <div class="row">
              <div class="col-md-12">
                  <h2 class="title text-center">Edit Site Content</h2>
              </div>
          </div>
        </div>


            <div id="contentAreas" class="cd-section">
                <!--                 tables -->
                <div id="tables">
                    <div class="title">
                    </div>
                    <div class="row">
                        <div class="col-md-8 ml-auto mr-auto">
                                <div class="row">
                                    <div class="col-sm-12">
                                        <committee-table></committee-table>
                                    </div>
                                </div>
                        </div>
                    </div>
                </div>

            </div>
    </div>
</template>

<script>
import CommitteeTable from '@/components/pages/components/CommitteeTable';

export default {
  components: { CommitteeTable }
}
</script>