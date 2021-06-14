<template>
    <b-container fluid class="p-0">
        <div class="e-topbar transparent">
            <b-row>
                <b-col cols="12 d-flex align-items-center" lg="6">
                    <h4><router-link :to="`/jajaran/detail/${$router.history.current.params.polda}`"><ph-caret-left class="phospor" /></router-link> <span class="semibold ml-3">Kegiatan {{ $router.history.current.params.polda }}</span></h4>
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
                <b-col cols="12" lg="4">
                    <b-row>
                        <b-col cols="12 pb-3" md="6">
                            <div class="e-widget-card row">
                                <b-col cols="7">
                                    <h4 class="font-weight-bold">{{ total }}</h4>
                                    <span>Total</span>
                                </b-col>
                                <b-col cols="5">
                                    <div class="e-widget-card-circle">
                                        <ph-chart-bar class="phospor"/>
                                    </div>
                                </b-col>
                            </div>
                        </b-col>
                        <b-col cols="12 pb-3" md="6">
                            <div class="e-widget-card row">
                                <b-col cols="7">
                                    <h4 class="font-weight-bold">{{ bulanIni }}</h4>
                                    <span>Bulan ini</span>
                                </b-col>
                                <b-col cols="5">
                                    <div class="e-widget-card-circle">
                                        <ph-chart-bar class="phospor"/>
                                    </div>
                                </b-col>
                            </div>
                        </b-col>
                        <b-col cols="12 pb-3" md="6">
                            <div class="e-widget-card row">
                                <b-col cols="7">
                                    <h4 class="font-weight-bold">{{ mingguIni }}</h4>
                                    <span>Minggu ini</span>
                                </b-col>
                                <b-col cols="5">
                                    <div class="e-widget-card-circle">
                                        <ph-chart-bar class="phospor"/>
                                    </div>
                                </b-col>
                            </div>
                        </b-col>
                        <b-col cols="12 pb-3" md="6">
                            <div class="e-widget-card row">
                                <b-col cols="7">
                                    <h4 class="font-weight-bold">{{ hariIni }}</h4>
                                    <span>Hari ini</span>
                                </b-col>
                                <b-col cols="5">
                                    <div class="e-widget-card-circle">
                                        <ph-chart-bar class="phospor"/>
                                    </div>
                                </b-col>
                            </div>
                        </b-col>
                    </b-row>
                    <b-row>
                        <b-col cols="12">
                            <div class="e-box">
                                <h4 class="font-weight-bold d-inline-block mb-4">Kegiatan terbaru</h4>
                                <perfect-scrollbar class="e-box-list e-box-list-lg">
                                    <b-row v-for="(keyKegiatan, indexKegiatan) in kegiatanTerbaru" :key="`personil-${indexKegiatan}`">
                                        <b-col cols="2">
                                            <div class="e-img-square">
                                                <b-img :src="keyKegiatan.photos" alt=""/>
                                            </div>
                                        </b-col>
                                        <b-col cols="10 pt-1">
                                            <h6 class="font-weight-bold">{{ keyKegiatan.pangkat }} {{ keyKegiatan.nama }}</h6>
                                            <div>{{ keyKegiatan.nrp }} - {{ keyKegiatan.kesatuan }}</div>
                                        </b-col>
                                        <b-col cols="12 pt-1">{{ keyKegiatan.judul }}</b-col>
                                        <b-col cols="12"><hr/></b-col>
                                    </b-row>
                                </perfect-scrollbar>
                            </div>
                        </b-col>
                    </b-row>
                </b-col>
                <b-col cols="12" lg="8">
                    <b-row>
                        <b-col cols="12" lg="7">
                            <b-row>
                                <b-col cols="12">
                                    <div class="e-box">
                                        <b-row>
                                            <b-col cols="8">
                                                <h4 class="font-weight-bold d-inline-block mb-4">Per jenis laporan <small>({{ formatTanggal(laporanTanggal) }})</small></h4>
                                            </b-col>
                                            <b-col cols="4 text-right">
                                                <date-picker v-model="laporanTanggal" class="custom-date" :clearable="false" @change="generateChart"></date-picker>
                                            </b-col>
                                        </b-row>
                                        <b-row class="align-items-center">
                                            <b-col cols="12 pt-1" lg="6">
                                                <div class="w-100 pl-0 pr-3">
                                                    <canvas id="jenis-laporan-chart" width="600"></canvas>
                                                </div>
                                            </b-col>
                                            <b-col cols="12 p-0 h-100" lg="6">
                                                <div class="e-box-spacer"></div>
                                                <b-row class="mb-3" v-for="(keyJenis, indexJenis) in chart.jenis.labels" :key="`jenis-${indexJenis}`">
                                                    <b-col cols="8 d-flex align-items-center">  
                                                        <div :class="`e-pill e-pill-primary-${indexJenis + 1}`"></div>
                                                        {{ keyJenis }}
                                                    </b-col>
                                                    <b-col cols="3 text-center"><div class="e-bg-primary p-1 px-3 rounded d-inline-block">{{ chart.jenis.datasets[0].data[indexJenis] }}</div></b-col>
                                                </b-row>
                                            </b-col>
                                        </b-row>
                                    </div>
                                </b-col>
                            </b-row>
                        </b-col>
                        <b-col cols="12" lg="5">
                            <div class="e-box">
                                <h4 class="font-weight-bold d-inline-block mb-4">Pengirim terbanyak</h4>
                                <perfect-scrollbar class="e-box-list e-box-list-sm">
                                    <b-row class="mb-3" v-for="(keyPengirim, indexPengirim) in pengirimTerbanyak" :key="`personil-${indexPengirim}`">
                                        <b-col cols="3 text-center">
                                            <div class="e-img-circle">
                                                <b-img :src="keyPengirim.photos" alt=""/>
                                            </div>
                                        </b-col>
                                        <b-col cols="7 pt-1">
                                            <h6 class="font-weight-bold">{{ keyPengirim.pangkat }} {{ keyPengirim.nama }}</h6>
                                            <div>{{ keyPengirim.nrp }} - {{ keyPengirim.kesatuan }}</div>
                                        </b-col>
                                        <b-col cols="2 text-center"><div class="e-bg-primary p-2 rounded d-inline-block">{{ keyPengirim.jumlah }}</div></b-col>
                                    </b-row>
                                </perfect-scrollbar>
                            </div>
                        </b-col>
                    </b-row>
                    <b-row>
                        <b-col cols="12">
                            <div class="e-box mt-4">
                                <b-row>
                                    <b-col cols="8">
                                        <h4 class="font-weight-bold d-inline-block mb-4">Statistik <small>({{ formatTanggal(statistikTanggal[0]) }} s/d {{ formatTanggal(statistikTanggal[1]) }})</small></h4>
                                    </b-col>
                                    <b-col cols="4 text-right">
                                        <date-picker v-model="statistikTanggal" range class="custom-date" :clearable="false" @change="generateChart"></date-picker>
                                    </b-col>
                                </b-row>
                                <b-row>
                                    <b-col cols="12">
                                        <div class="position-relative" style="height: 15em;">
                                            <canvas id="statistik-chart"></canvas>
                                        </div>
                                    </b-col>
                                </b-row>
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
var Chart = require('chart.js')
export default {
    name: 'kegiatan',
    data () {
        return {
            laporanTanggal: new Date(),
            statistikTanggal: [new Date(), add(new Date(), { days: 10 }) ],
            tanggalSekarang: new Date(),
            appName: appName,
            total: 18700,
            bulanIni: 124,
            mingguIni: 74,
            hariIni: 12,
            pengirimTerbanyak: [
                { nrp: '19060213', nama: 'ISFA WIJAWAYA', photos: '/assets/dummy/dummy-personil-1.png', pangkat: 'BRIGADIR', kesatuan: 'DITLANTAS POLDA JATIM', jumlah: 45 },
                { nrp: '19060211', nama: 'SUBAGYA', photos: '/assets/dummy/dummy-personil-2.png', pangkat: 'BRIGADIR', kesatuan: 'DITLANTAS POLDA BALI',  jumlah: 32 },
                { nrp: '19060210', nama: 'FAJAR AGUS', photos: '/assets/dummy/dummy-personil-3.png', pangkat: 'AIPDA', kesatuan: 'DITLANTAS POLDA JAMBI', jumlah: 24 },
            ],
            kegiatanTerbaru: [
                { nrp: '19060213', nama: 'ISFA WIJAWAYA', photos: '/assets/dummy/dummy-location-1.png', pangkat: 'BRIGADIR', kesatuan: 'DITLANTAS POLDA JATIM', judul: 'Kunjungan ke masyarakat tidak mampu.' },
                { nrp: '19060211', nama: 'SUBAGYA', photos: '/assets/dummy/dummy-location-2.png', pangkat: 'BRIGADIR', kesatuan: 'DITLANTAS POLDA JAMBI',  judul: 'Edukasi Peningkatan Disiplin Kesehatan' },
                { nrp: '19060210', nama: 'FAJAR AGUS', photos: '/assets/dummy/dummy-location-3.png', pangkat: 'AIPDA', kesatuan: 'DITLANTAS POLDA JATENG', judul: 'Sambang' },
            ],
            chart: {
                jenis: {
                    labels:  ["Turjawali Ditsamapta", "Turjawali Ditlantas", "PPKM Mikro", "Bhabinkamtibmas"],
                    datasets: [
                        {
                            label: 'Jumlah',
                            data: [ 1, 2, 6, 3 ],
                            backgroundColor: [ '#6581E3', '#869EF2', '#B5C5FF', '#CFDAFF' ],
                            borderWidth: 0,
                            fill: 'start'
                        },
                    ]
                },
                statistik: {
                    labels:  ["20-Mar", "21-Mar", "22-Mar", "23-Mar", "24-Mar", "25-Mar", "26-Mar", "27-Mar", "28-Mar", "29-Mar"],
                    datasets: [
                        {
                            label: 'Kegiatan',
                            pointBorderWidth: 4,
                            pointBackgroundColor: '#5B7CEE',
                            lineTension: 0,
                            data: [ 30, 56, 20, 35, 36, 52, 42, 30, 53, 37 ],
                            borderColor: '#5B7CEE',
                        },
                    ]
                }
            }
        }
    },
    methods : {
        generateChart () {
            var circleChart = new Chart('jenis-laporan-chart', {
                    type: 'pie',
                    data: {
                    labels:  this.chart.jenis.labels,
                    datasets: this.chart.jenis.datasets
                },
                options: {
                    legend: { display: false, maxWidth: 10 },
                    elements: { borderColor: '#D7DDF4' },
                    responsive: true,
                    maintainAspectRatio: false,
                },
            });

            var ctx = document.getElementById('statistik-chart').getContext('2d');
            var gradient = ctx.createLinearGradient(0, 0, 0, 200);
            gradient.addColorStop(0, 'rgba(138, 164, 255, 0.85)');   
            gradient.addColorStop(1, 'rgba(138, 164, 255, 0)');

            this.chart.statistik.datasets[0].backgroundColor = gradient

            var lineChart = new Chart('statistik-chart', {
                    type: 'line',
                    data: {
                    labels:  this.chart.statistik.labels,
                    datasets: this.chart.statistik.datasets
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    legend: { display: false },
                    scales: {
                        xAxes: [{
                            gridLines: {
                                color: "rgba(0, 0, 0, 0)",
                            },
                            ticks: { fontFamily: "Poppins" }
                        }],
                        yAxes: [{
                            gridLines: {
                                color: "rgba(0, 0, 0, 0)",
                                zeroLineColor: "white"
                            },
                            ticks: { 
                                beginAtZero: true,
                                fontFamily: "Poppins"
                            },
                        }]
                    },
                }
            });
        },
        formatTanggal (tanggal) {
            return format(parseISO(formatISO(tanggal)), 'd MMMM yyyy', {locale: id})
        },
    },
    mounted () {
        this.generateChart()
    }
}
</script>