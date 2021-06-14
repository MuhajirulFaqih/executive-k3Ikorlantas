<template>
    <b-container fluid class="p-0">
        <div class="e-topbar transparent">
            <b-row>
                <b-col cols="12 d-flex align-items-center" lg="6">
                    <h4><router-link to="/"><ph-caret-left class="phospor" /></router-link> <span class="semibold ml-3">Kesatuan</span></h4>
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
                <b-col cols="12 py-3" lg="2" v-for="(keyKesatuan, indexKesatuan) in kesatuan" :key="`kesatuan-${indexKesatuan}`">
                    <div class="e-rect">
                        <div class="e-rect-icon">
                            <img :src="keyKesatuan.icon" alt="">
                        </div>
                        <div class="e-rect-body">
                            <div>{{ keyKesatuan.jumlah }}</div>
                            <span>{{ keyKesatuan.kesatuan }}</span>
                        </div>
                    </div>
                </b-col>
           </b-row>
        </div>
    </b-container>
</template>

<script>
import { format, formatISO, parseISO, add } from 'date-fns'
import id from 'date-fns/locale/id'
export default {
    name: 'kesatuan',
    data () {
        return {
            appName: appName,
            tanggalSekarang: new Date(),
            kesatuan: [
                { kesatuan: 'PIMPINAN', icon: '/assets/kesatuan/pimpinan.png', jumlah: 2 },
                { kesatuan: 'ROLOG', icon: '/assets/kesatuan/rolog.png', jumlah: 2 },
                { kesatuan: 'BID TIK', icon: '/assets/kesatuan/bidtik.png', jumlah: 46 },
                { kesatuan: 'SAMAPTA', icon: '/assets/kesatuan/samapta.png', jumlah: 28 },
                { kesatuan: 'POLAIRUD', icon: '/assets/kesatuan/polairud.png', jumlah: 1 },
                { kesatuan: 'SATBRIMOB', icon: '/assets/kesatuan/satbrimob.png', jumlah: 1096 },
                { kesatuan: 'ITWASDA', icon: '/assets/kesatuan/itwasda.png', jumlah:  25 },
                { kesatuan: 'ROOPS', icon: '/assets/kesatuan/roops.png', jumlah: 48 },
                { kesatuan: 'RORENA', icon: '/assets/kesatuan/rorena.png', jumlah: 26 },
                { kesatuan: 'ROSDIM', icon: '/assets/kesatuan/rosdim.png', jumlah: 77 },
                { kesatuan: 'ROSARPRAS', icon: '/assets/kesatuan/rosarpras.png', jumlah: 27 },
                { kesatuan: 'BIDPROPAM', icon: '/assets/kesatuan/bidpropam.png', jumlah: 84 },
                { kesatuan: 'BIDHUMAS', icon: '/assets/kesatuan/bidhumas.png', jumlah: 35 },
                { kesatuan: 'BIDKUM', icon: '/assets/kesatuan/bidkum.png', jumlah: 25 },
                { kesatuan: 'SPRIPIM', icon: '/assets/kesatuan/spripim.png', jumlah: 22 },
                { kesatuan: 'SETUM', icon: '/assets/kesatuan/setum.png', jumlah: 42 },
                { kesatuan: 'YANMA', icon: '/assets/kesatuan/yanma.png', jumlah: 62 },
                { kesatuan: 'SPKT', icon: '/assets/kesatuan/spkt.png', jumlah: 17 },
                { kesatuan: 'DITINTELKAM', icon: '/assets/kesatuan/ditintelkam.png', jumlah: 166 },
                { kesatuan: 'DITRESKRIMUM', icon: '/assets/kesatuan/ditreskrimum.png', jumlah: 94 },
                { kesatuan: 'DITRESKRIMSUS', icon: '/assets/kesatuan/ditreskrimsus.png', jumlah: 97 },
                { kesatuan: 'DITRESNARKOBA', icon: '/assets/kesatuan/ditresnarkoba.png', jumlah: 63 },
                { kesatuan: 'DITBINMAS', icon: '/assets/kesatuan/ditbinmas.png', jumlah: 34 },
                { kesatuan: 'DITSABHARA', icon: '/assets/kesatuan/ditsabhara.png', jumlah: 419 },
                { kesatuan: 'DITLANTAS', icon: '/assets/kesatuan/ditlantas.png', jumlah: 193 },
                { kesatuan: 'DITPAMOBVIT', icon: '/assets/kesatuan/ditpamobvit.png', jumlah: 84 },
                { kesatuan: 'DITPOLAIR', icon: '/assets/kesatuan/ditpolair.png', jumlah: 217 },
                { kesatuan: 'DITTAHTI', icon: '/assets/kesatuan/dittahti.png', jumlah: 27 },
                { kesatuan: 'SPN', icon: '/assets/kesatuan/spn.png', jumlah: 113 },
                { kesatuan: 'BIDKEU', icon: '/assets/kesatuan/bidkeu.png', jumlah: 18 },
                { kesatuan: 'BIDDOKKES', icon: '/assets/kesatuan/biddokkes.png', jumlah: 44 },
            ]
        }
    },
    methods : {
        getData() {

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