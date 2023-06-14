<template>
        <nav class="sb-topnav navbar navbar-expand navbar-light bg-primary">
            <!-- Navbar Brand-->
            <a class="navbar-brand ms-3 p-2 fw-medium hover-scale" href="#">Project
            <span><img class="logo-size" :src="imgStartUrl + '/img/logo.png'" alt="logo"></span>
            </a>
            <!-- Navbar Search-->
            <form class="d-none d-md-inline-block form-inline ms-auto me-0 me-md-3 my-2 my-md-0">
                <div class="input-group">
                    <input class="form-control" type="text" placeholder="Search for..." aria-label="Search for..." aria-describedby="btnNavbarSearch" />
                    <button class="btn btn-secondary hover-invert" id="btnNavbarSearch" type="button"><i class="fas fa-search"></i></button>
                </div>
            </form>
            <!-- Navbar DropDown-->
            <ul class="navbar-nav ms-auto ms-md-0 me-3 me-lg-4">
                <!-- Authentication Links -->
                <li class="nav-item">
                    <a class="nav-link active hover-invert" href="#">Login</a>
                </li>

                <li class="nav-item">
                    <a class="nav-link active hover-invert" href="#">Registrati</a>
                </li>
            </ul>
        </nav>
</template>

<script>
    export default {
        data() {
            return {
            imgStartUrl: 'http://localhost:8000',
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>