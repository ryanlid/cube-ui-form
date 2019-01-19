<template>
  <div>
    <cube-form
    :model="model"
    :schema="schema"
    :immediate-validate="false"
    :options="options"
    @validate="validateHandler"
    @submit="submitHandler">
    </cube-form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      validity: {},
      valid: undefined,
      model: {
        inputValue: '',
        uploadValue1: []
      },
      schema: {
        groups: [{
          legend: '基本信息',
          fields: [
            {
              type: 'input',
              modelKey: 'inputValue',
              label: '姓名',
              props: {
                placeholder: '请输入'
              },
              rules: {},
              // validating when blur
              trigger: 'blur'
            },
            {
              type: 'upload',
              modelKey: 'uploadValue1',
              label: '头像',
              props: {
                action: {
                  target: 'https://upload.oonnnoo.com/upload',
                  fileName: 'upfile',
                  data: {
                    token: 'token'
                  },
                  checkSuccess: (res, file) => {
                    console.log('res', res)
                    // if (res.status === 0) {
                    //   return true
                    // }
                    return true
                  }
                },
                max: 2
              },
              events: {
                'file-removed': (...args) => {
                  console.log('file removed', args)
                },
                'files-added': (...args) => {
                  console.log('add', args)
                },
                'file-submitted': (file) => {
                  console.log('file-submitted-file', file)
                }
              },
              messages: {
                uploaded: '上传失败'
              }
            }

          ]
        },

        {
          fields: [{
            type: 'submit',
            label: '提交'
          }]
        }
        ]
      },
      options: {
        scrollToInvalidField: true,
        layout: 'standard' // classic fresh
      }
    }
  },
  methods: {
    submitHandler (e, model) {
      e.preventDefault()
      console.log('submit', e)
      console.log('submitmodel', model)
    },
    validateHandler (result) {
      this.validity = result.validity
      this.valid = result.valid
      console.log('validity', result.validity, result.valid, result.dirty, result.firstInvalidFieldIndex)
    }
  }
}

</script>
