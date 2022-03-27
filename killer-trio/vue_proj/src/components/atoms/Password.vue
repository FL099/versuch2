<template>
    <div>
        <label for="inputPassword" class="form-label">Passwort</label>
            <input type="password" id="inputPassword"
            class="form-control" aria-describedby="passwordHelp" placeholder="******">
        <div id="passwordHelp" class="form-text">{{ msg }}</div>
    </div>
</template>

<script>

export default {
  name: 'Password',
  props: ['msg'],
};
</script>
