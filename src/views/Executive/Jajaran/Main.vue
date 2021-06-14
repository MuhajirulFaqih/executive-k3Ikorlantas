<template>
    <b-container fluid class="p-0">
        <div class="e-topbar transparent">
            <b-row>
                <b-col cols="12 d-flex align-items-center" lg="6">
                    <h4><router-link to="/"><ph-caret-left class="phospor" /></router-link> <span class="semibold ml-3">Jajaran</span></h4>
                </b-col>
                <b-col cols="12 pt-2" lg="6">
                    <b-row>
                        <b-col cols="12 d-none d-lg-flex justify-content-end align-items-center" lg="6" offset-lg="6">
                            <div class="e-topbar-date"><ph-calendar-blank class="phospor"/> {{ formatTanggal(tanggalSekarang) }}</div>
                        </b-col>
                    </b-row>
                </b-col>
            </b-row>
        </div>
        <div class="e-body">
           <b-row>
                <b-col cols="12" lg="2" offset-lg="5">
                    <div class="e-square e-square-offset">
                        <div class="e-square-icon">
                            <img src="/assets/kesatuan/pimpinan.png" alt="">
                        </div>
                        <div class="e-square-body">
                            <span>KORLANTAS POLRI</span>
                        </div>
                    </div>
                </b-col>
           </b-row>
           <b-row class="mt-4">
               <b-col cols="12">
                   <b-row>
                        <b-col cols="12 pb-3 d-flex justify-content-center d-lg-block" lg="3" v-for="(keyJajaran, indexJajaran) in jajaran" :key="`jajaran-${indexJajaran}`">
                           <div :class="`e-square ${getClassJajaran(indexJajaran)} cursor-pointer`" @click="$router.push({ name: 'Detail | Polda Jajaran | Executive', params: { polda: keyJajaran.jajaran } })">
                                <div class="e-square-body">
                                    <div>{{ keyJajaran.jumlah }}</div>
                                    <span>{{ keyJajaran.jajaran }}</span>
                                </div>
                            </div>
                       </b-col>
                   </b-row>
               </b-col>
           </b-row>
        </div>
    </b-container>
</template>

<script>
import { format, formatISO, parseISO, add } from 'date-fns'
import id from 'date-fns/locale/id'
export default {
    name: 'jajaran',
    data () {
        return {
            appName: appName,
            tanggalSekarang: new Date(),
            jajaran: [
                { jajaran: 'POLDA BALI ', jumlah: 775 },
                { jajaran: 'POLDA BANGKA BELITUNG', jumlah: 552 },
                { jajaran: "POLDA BANTEN", jumlah: 342 },
                { jajaran: "POLDA BENGKULU",  jumlah: 879 },
                { jajaran: "POLDA DAERAH ISTIMEWA YOGYAKARTA", jumlah: 886 },
                { jajaran: "POLDA GORONTALO", jumlah: 979 },
                { jajaran: "POLDA JAMBI", jumlah: 768 },
                { jajaran: "POLDA JAWA BARAT", jumlah: 897 },
                { jajaran: "POLDA JAWA TENGAH", jumlah: 877 },
                { jajaran: "POLDA JAWA TIMUR", jumlah: 324 },
                { jajaran: "POLDA KALIMANTAN BARAT",  jumlah: 345 },
                { jajaran: "POLDA KALIMANTAN SELATAN", jumlah: 865 },
                { jajaran: "POLDA KALIMANTAN TENGAH", jumlah: 546 },
                { jajaran: "POLDA KALIMANTAN TIMUR",  jumlah: 324 },
                { jajaran: "POLDA KEPULAUAN RIAU", jumlah: 623 },
                { jajaran: "POLDA LAMPUNG", jumlah: 987 },
                { jajaran: "POLDA MALUKU", jumlah: 817 },
                { jajaran: "POLDA MALUKU UTARA",  jumlah: 135 },
                { jajaran: "POLDA METRO JAKARTA RAYA", jumlah: 643 },
                { jajaran: "POLDA NANGGROE ACEH DARUSSALAM",  jumlah: 323 },
                { jajaran: "POLDA NUSA TENGGARA BARAT", jumlah: 891 },
                { jajaran: "POLDA NUSA TENGGARA TIMUR", jumlah: 702 },
                { jajaran: "POLDA PAPUA", jumlah: 901 },
                { jajaran: "POLDA PAPUA BARAT", jumlah: 711 },
                { jajaran: "POLDA RIAU",  jumlah: 298 },
                { jajaran: "POLDA SULAWESI SELATAN",  jumlah: 540 },
                { jajaran: "POLDA SULAWESI TENGAH", jumlah: 891 },
                { jajaran: "POLDA SULAWESI TENGGARA", jumlah: 109 },
                { jajaran: "POLDA SULAWESI UTARA", jumlah: 809 },
                { jajaran: "POLDA SUMATERA BARAT", jumlah: 943 },
                { jajaran: "POLDA SUMATERA SELATAN",  jumlah: 981 },
                { jajaran: "POLDA SUMATERA UTAR", jumlah: 678 },
            ]
        }
    },
    methods : {
        getData() {

        },
        getClassJajaran (index) {
            return (index % 2) == 1 ? 'e-square-dark' : ''
        },
        formatTanggal (tanggal) {
            return format(parseISO(formatISO(tanggal)), 'd MMMM yyyy', {locale: id})
        },
    },
    mounted () {
        this.getData()
    }
}
</script>