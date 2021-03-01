<template>
    <div>

    <navbar
            menu-classes="ml-auto"
            type="primary">
        <template slot-scope="{toggle, isToggled}">
                <nuxt-link v-popover:popover1 class="navbar-brand" to="/">
                    Glenlea Tennis Club
                </nuxt-link>
                <el-popover
                        ref="popover1"
                        popper-class="popover"
                        placement="bottom"
                        width="400"
                        trigger="hover">
                    <div class="popover-body">Welcome to Glenlea</div>
                </el-popover>
        </template>
        <template slot="navbar-menu">
            <drop-down tag="li" title="Contact Us" class="nav-item">
                <nav-link to="/contacts">
                    Key Contacts
                </nav-link>
                <nav-link to="/locations">
                    Locations
                </nav-link>
            </drop-down>
        </template>
    </navbar>
    </div>
</template>

<script>
  import { DropDown, NavbarToggleButton, Navbar, NavLink } from '@/components';
  import { Popover } from 'element-ui'
  export default {
    name: 'main-navbar',
    props: {
      transparent: Boolean,
      colorOnScroll: Number
    },
    components: {
      DropDown,
      Navbar,
      NavbarToggleButton,
      NavLink,
      [Popover.name]: Popover
    }
  }
</script>

<style scoped>

</style>
