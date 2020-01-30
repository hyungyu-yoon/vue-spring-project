<template>
  <div>
    <v-sheet
      :elevation="12"
      :height="300"
    >
      <v-container>
        <v-row>
          <v-col cols="12">
            <h1>로그인</h1>
          </v-col>
        </v-row>
        <v-divider />
        <v-row>
          <v-col
            cols="12"
          >
            <v-text-field
              label="아이디"
              outlined
            />
            <v-text-field
              label="비밀번호"
              outlined
            />
          </v-col>
        </v-row>
      </v-container>
    </v-sheet>
  </div>
</template>

<script>
export default {}
</script>

<style></style>
