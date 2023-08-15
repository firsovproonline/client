<template>
  <div>
    <modal
      :show="true"
      :scrollable="true"
      body-id="modalBody" header-id="modalHeader"
    >
      <template #header>
        <h1>Авторизация</h1>
      </template>
      <template #body>
        <div style='display:flex;justify-content: center;'>
          <a href="/login">
            <h1 style="text-align:center">
              <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-mail"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
            </h1>
          </a>
          <a href="/api/auth/yandex/">
            <div style="margin-top: 12px">
              <svg version="1.1" id="Yandex_Logo"  width="80" height="80" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px"
                   y="0px" viewBox="0 0 1080 1080" style="enable-background:new 0 0 1080 1080;"
                   xml:space="preserve">
            <style type="text/css">
              .st0{fill:#FC3F1D;}
              .st1{fill:#FFFFFF;}
            </style>
                <circle class="st0" cx="540" cy="540" r="538.9"/>
                <path id="Glyph" class="st1" d="M735,878.3H616.7V293.2H564c-96.6,0-147.2,48.3-147.2,120.4c0,81.8,34.9,119.7,107.1,168l59.5,40.1
            l-171,256.5H285.2l153.9-229c-88.5-63.2-138.3-124.9-138.3-229c0-130.1,90.7-218.6,262.4-218.6h171v676.5H735z"/>
          </svg>
            </div>
          </a>
        </div>
        <div>
          <form action="/login/password" method="post">
            <div style="display: flex;align-items: center;">
              <div class="label">Enail</div>
              <input id="username" name="username" type="text" autocomplete="username" required autofocus style="width: 100%" >
            </div>
            <div style="display: flex;align-items: center;margin-top: 6px">
              <div class="label">Пароль</div>
              <input id="current-password" name="password" type="password" autocomplete="current-password" style="width: 100%" required>
            </div>
            <div style="display: flex;align-items: center;justify-content: center;margin-top: 6px">
              <button class="btn btn-pill btn-secondary btn-air-secondary btn-sm" type="submit">Войти</button>
            </div>
          </form>
        </div>
      </template>
      <template #footer>
      </template>
    </modal>
  </div>
</template>

<script>
export default {
  name: 'login',
  data: () => ({
    selectOwner: ''
  }),
}
</script>

<style scoped>
  .label{
    color: #0c5460;
    font-size: 22px;
    width: 130px;
  }
</style>
