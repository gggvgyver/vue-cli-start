export const dateFormat = {
    methods: {
        getDateAndTime(date) {
            if (date !==null) {
                let hour = date.getHours()
                let minutes = date.getMinutes()
                let year = date.getFullYear()
                let month = date.getMonth() + 1
                let dates = date.getDate()
                let seconds = date.getSeconds()
        
                return `${year}/${month}/${dates} ${hour}:${minutes}:${seconds}`
            } else {
                return null
            }
        }
    },
    data () {
        return {
            mixinData: '이것은 믹스인 데이타'
        }
    }
}