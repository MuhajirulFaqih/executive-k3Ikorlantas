    <template>
    <b-container fluid class="p-0">
        <div class="e-topbar transparent">
            <b-row>
                <b-col cols="12 d-flex align-items-center" lg="6">
                    <h4><router-link :to="`/jajaran/detail/${$router.history.current.params.polda}`"><ph-caret-left class="phospor" /></router-link> <span class="semibold ml-3">Pengaduan {{ $router.history.current.params.polda }}</span></h4>
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
                <b-col cols="12" lg="8">
                    <b-row>
                        <b-col cols="12" lg="6">
                            <b-row>
                                <b-col cols="12 pb-3" md="6">
                                    <div class="e-widget-card e-widget-card-success row">
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
                                    <div class="e-widget-card e-widget-card-success row">
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
                                    <div class="e-widget-card e-widget-card-success row">
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
                                    <div class="e-widget-card e-widget-card-success row">
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
                        </b-col>
                        <b-col cols="12" lg="6">
                            <div class="e-box">
                                <h4 class="font-weight-bold d-inline-block mb-4">Pengirim terbanyak</h4>
                                <perfect-scrollbar class="e-box-list e-box-list-sm">
                                    <b-row class="mb-3" v-for="(keyPengirim, indexPengirim) in pengirimTerbanyak" :key="`pengirim-${indexPengirim}`">
                                        <b-col cols="3 text-center">
                                            <div class="e-img-circle">
                                                <b-img :src="keyPengirim.photos" alt=""/>
                                            </div>
                                        </b-col>
                                        <b-col cols="6 pt-1">
                                            <h6 class="font-weight-bold">{{ keyPengirim.nama }}</h6>
                                            <div>{{ keyPengirim.keterangan }}</div>
                                        </b-col>
                                        <b-col cols="3 text-center"><div class="e-bg-success p-2 rounded d-inline-block">{{ keyPengirim.jumlah }}</div></b-col>
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
                <b-col cols="12" lg="4">
                   <b-row>
                        <b-col cols="12">
                            <div class="e-box">
                                <h4 class="font-weight-bold d-inline-block mb-4">Pengaduan terbaru</h4>
                                <perfect-scrollbar class="e-box-list e-box-list-xl">
                                    <b-row v-for="(keyPengaduan, indexPengaduan) in pengaduanTerbaru" :key="`pengaduan-${indexPengaduan}`">
                                        <b-col cols="2">
                                            <div class="e-img-square">
                                                <b-img :src="keyPengaduan.photos" alt=""/>
                                            </div>
                                        </b-col>
                                        <b-col cols="10 pt-1">
                                            <h6 class="font-weight-bold">{{ keyPengaduan.nama }}</h6>
                                            <div>{{ keyPengaduan.lokasi }}</div>
                                        </b-col>
                                        <b-col cols="12 pt-1">{{ keyPengaduan.judul }}</b-col>
                                        <b-col cols="12"><hr/></b-col>
                                    </b-row>
                                </perfect-scrollbar>
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
    name: 'pengaduan',
    data () {
        return {
            laporanTanggal: new Date(),
            statistikTanggal: [new Date(), add(new Date(), { days: 10 }) ],
            tanggalSekarang: new Date(),
            appName: appName,
            total: 135,
            bulanIni: 98,
            mingguIni: 68,
            hariIni: 13,
            pengirimTerbanyak: [
                { nama: 'BRIGADIR ISFA WIJAWAYA', photos: '/assets/dummy/dummy-personil-1.png', keterangan: '19060213 - ROOPS', jumlah: 45 },
                { nama: 'FAJAR', photos: '/assets/dummy/dummy-personil-2.png', keterangan: 'Masyarakat', jumlah: 36 },
                { nama: 'AIPDA FAJAR AGUS', photos: '/assets/dummy/dummy-personil-3.png', keterangan: '19060210 - POLRES BONTANG', jumlah: 24 },
            ],
            pengaduanTerbaru: [
                { nama: 'ISFA WIJAWAYA', photos: '/assets/dummy/dummy-location-1.png', lokasi: 'Desa Karang Doyo', judul: 'Untuk pembuatan skck online ko ada pili foto saya pencet ko ndak bisa mohon arahannnya'},
                { nama: 'SUBAGYA', photos: '/assets/dummy/dummy-location-2.png', lokasi: 'Jembatan Mahulu', judul: 'Zero Dmc'},
                { nama: 'FAJAR AGUS', photos: '/assets/dummy/dummy-location-3.png', lokasi: 'Di jalan raya depan smp3 tanah grogot', judul: 'Zero Dmc'},
                { nama: 'SUBAGYA', photos: '/assets/dummy/dummy-location-2.png', lokasi: 'Jembatan Mahulu', judul: 'Zero Dmc Baru   '}
            ],
            chart: {
                statistik: {
                    labels: ["20-Mar", "21-Mar", "22-Mar", "23-Mar", "24-Mar", "25-Mar", "26-Mar", "27-Mar", "28-Mar", "29-Mar"],
                    datasets: [
                        {
                            label: 'Pengaduan',
                            pointBorderWidth: 4,
                            pointBackgroundColor: '#3DBB76',
                            lineTension: 0,
                            data: [ 30, 56, 20, 35, 36, 52, 42, 30, 53, 37 ],
                            borderColor: '#3DBB76',
                        },
                    ]
                }
            }
        }
    },
    methods : {
        generateChart () {
            var ctx = document.getElementById('statistik-chart').getContext('2d');
            var gradient = ctx.createLinearGradient(0, 0, 0, 200);
            gradient.addColorStop(0, 'rgba(117, 226, 164, 0.85)');   
            gradient.addColorStop(1, 'rgba(117, 226, 164, 0)');

            this.chart.statistik.datasets[0].backgroundColor = gradient

            var lineChart = new Chart('statistik-chart', {
                    type: 'line',
                    data: {
                    labels: this.chart.statistik.labels,
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