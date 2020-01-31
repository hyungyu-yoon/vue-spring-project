<template>
  <div>
    <v-sheet
      :elevation="12"
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
              prepend-inner-icon="fas fa-user"
              outlined
              :rules="rules"
              counter="20"
            />
            <v-text-field
              label="비밀번호"
              prepend-inner-icon="fas fa-lock"
              outlined
              :rules="rules"
            />
            
            <v-btn
              block
              x-large
              dark
              color="blue"
            >
              Login
            </v-btn>
          </v-col>
          <v-col
            cols="8"
          >
            <p>
              회원이 아니신가요? <a>회원가입</a>
            </p>
          </v-col>
          <v-col
            cols="4"
            class="text-right .caption"
          >
            <a>비밀번호 찾기</a>
          </v-col>
        </v-row>
        <v-divider />
        <v-row dense>
          <v-col
            cols="12"
          >
            <v-btn
              block
              x-large
              dark
              color="black"
            >
              <v-icon
                left
                large
                dark
              >
                fab fa-github
              </v-icon> 깃 허브 아이디로 로그인하기
            </v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-sheet>
  </div>
</template>

<script>
export default {
  data (){
    return {
      rules: [
        value => !!value || 'Required.',
        value => this.idCheck(value) || '아이디는 소문자와 숫자의 조합으로 해주세요',
      ],
    }
  },
  methods: {
    idCheck(value){
      const idReg = /[a-z0-9]{5,19}$/g
      
      if(idReg.test(value)){
        console.log('test 성공')
        return true
      }else{
        console.log('테스트 실패')
      }

    }
  }

}
</script>

<style></style>
