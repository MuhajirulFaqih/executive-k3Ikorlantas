<template>
    <b-container fluid class="p-0">
        <div class="e-topbar transparent">
            <b-row>
               <b-col cols="12 d-flex align-items-center" lg="6">
                    <h4><router-link to="/"><ph-caret-left class="phospor" /></router-link> <span class="semibold ml-3">Personil</span></h4>
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
                <b-col cols="12" lg="6">
                    <b-row>
                        <b-col cols="12">
                            <div class="e-box">
                                <h4 class="font-weight-bold d-inline-block mb-4">Status Dinas</h4>
                                <b-row class="align-items-center">
                                    <b-col cols="12" lg="6">
                                        <canvas id="dinas-chart" width="700"></canvas>
                                    </b-col>
                                    <b-col cols="12 p-0 h-100" lg="6">
                                        <div class="e-box-spacer"></div>
                                        <b-row class="mb-1" v-for="(keyDinas, indexDinas) in chart.dinas.labels" :key="`dinas-${indexDinas}`">
                                            <b-col cols="9">  
                                                <div :class="`e-circle e-circle-empty e-circle-success-${indexDinas + 1}`"></div>
                                                {{ keyDinas }}
                                            </b-col>
                                            <b-col cols="3 text-center"><div class="e-bg-dark p-1 px-3 rounded d-inline-block">{{ chart.dinas.datasets[0].data[indexDinas] }}</div></b-col>
                                        </b-row>
                                    </b-col>
                                </b-row>
                            </div>
                        </b-col>
                        <b-col cols="12 pt-3" lg="6">
                            <div class="e-box e-box-sm e-box-sm pb-3">
                                <div class="text-center">
                                    <h4 class="font-weight-bold d-inline-block mb-4">Status Keaktifan</h4>
                                    <b-row>
                                        <b-col cols="6" offset="3">
                                            <canvas id="keaktifan-chart" width="500"></canvas>
                                        </b-col>
                                    </b-row>
                                </div>
                            </div>
                        </b-col>
                        <b-col cols="12 pt-3" lg="6">
                            <div class="e-box e-box-sm pb-3">
                                <div class="text-center">
                                    <h4 class="font-weight-bold d-inline-block mb-4">Status Login</h4>
                                    <b-row>
                                        <b-col cols="6" offset="3">
                                            <canvas id="login-chart" width="500"></canvas>
                                        </b-col>
                                    </b-row>
                                </div>
                            </div>
                        </b-col>
                    </b-row>
                </b-col>
                <b-col cols="12" lg="6">
                    <div class="e-box">
                        <h4 class="font-weight-bold d-inline-block mb-4">Pangkat</h4>
                        <b-row>
                            <b-col cols="12 pb-3" lg="4" v-for="(keyPangkat, indexPangkat) in pangkat" :key="`pangkat-${indexPangkat}`">
                                <div class="e-train">
                                    <b-row>
                                        <b-col cols="7 d-flex align-items-center">
                                            <div>{{ keyPangkat.pangkat }}</div>
                                        </b-col>
                                        <b-col cols="5">
                                            <div class="e-train-body">{{ keyPangkat.jumlah }}</div>
                                        </b-col>
                                    </b-row>
                                </div>
                            </b-col>
                        </b-row>
                    </div>
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
    name: 'personil',
    data () {
        return {
            appName: appName,
            tanggalSekarang: new Date(),
            pangkat: [
                { pangkat: 'AKP', jumlah: '178'},
                { pangkat: 'IPTU', jumlah: '380'},
                { pangkat: 'IPDA', jumlah: '377'},
                { pangkat: 'AIPTU', jumlah: '866'},
                { pangkat: 'AIPDA', jumlah: '833'},
                { pangkat: 'BRIPKA', jumlah: '1330'},
                { pangkat: 'BRIPTU', jumlah: '888'},
                { pangkat: 'BRIPDA', jumlah: '1435'},
                { pangkat: 'BRIGADIR', jumlah: '1605'},
                { pangkat: 'KOMPOL', jumlah: '217'},
                { pangkat: 'AKBP', jumlah: '108'},
                { pangkat: 'KOMBESPOL', jumlah: '26'},
                { pangkat: 'BHARADA', jumlah: '78'},
                { pangkat: 'BHARATU', jumlah: '164'},
                { pangkat: 'IRJEN POL', jumlah: '2'},
                { pangkat: 'BRIGJEN POL', jumlah: '3'},
                { pangkat: 'KOMJEN POL', jumlah: '1'},
                { pangkat: 'PENATA', jumlah: '55'},
                { pangkat: 'PENATA I', jumlah: '20'},
                { pangkat: 'PENDA', jumlah: '11'},
                { pangkat: 'PENDA I', jumlah: '38'},
                { pangkat: 'PENGATUR', jumlah: '11'},
                { pangkat: 'PENGATUR I', jumlah: '80'},
                { pangkat: 'PEMBINA', jumlah: '9'},
                { pangkat: 'PENGDA', jumlah: '21'},
                { pangkat: 'PENGDA I', jumlah: '8'},
                { pangkat: 'JURMUD', jumlah: '1'},
            ],
            chart: {
                dinas: {
                    labels:  ["Pimpinan", "Piker Jaga", "Patroli", "Pengawalan", "Binluh", "Pam dan Gatur Giat Masyarakat", "Ptotab Pagi", "Protab Malam", "Lepas Dinas"],
                    datasets: [
                        {
                            label: 'Jumlah',
                            data: [ 2, 134, 33, 23, 65, 125, 75, 223, 424 ],
                            backgroundColor: [ '#37D2E3','#24BACB','#17A6B6','#108E9C','#0D7581','#37E3AF','#2CCC9C','#14A87B','#098A63' ],
                            borderWidth: 0,
                            fill: 'start'
                        },
                    ]
                },
                keaktifan: {
                    labels:  ["Aktif", "Pasif"],
                    datasets: [
                        {
                            label: 'Jumlah',
                            data: [ 45, 50 ],
                            backgroundColor: [ '#4BD984', '#FFA857' ],
                            borderWidth: 3,
                            fill: 'start'
                        },
                    ]
                },
                login: {
                    labels:  ["Pernah Login", "Belum Login"],
                    datasets: [
                        {
                            label: 'Jumlah',
                            data: [ 30, 65 ],
                            backgroundColor: [ '#1BC59C', '#FF7B7B' ],
                            borderWidth: 3,
                            fill: 'start'
                        },
                    ]
                }
            }
        }
    },
    methods : {
        generateChart() {
            var doughnutChart = new Chart('dinas-chart', {
                    type: 'doughnut',
                    data: {
                    labels:  this.chart.dinas.labels,
                    datasets: this.chart.dinas.datasets
                },
                options: {
                    legend: { display: false, maxWidth: 10 },
                    elements: { borderColor: '#D7DDF4' },
                    responsive: true,
                    maintainAspectRatio: false,
                    cutoutPercentage: 60
                },
            });

            var circleFirstChart = new Chart('keaktifan-chart', {
                type: 'pie',
                data: {
                    labels:  this.chart.keaktifan.labels,
                    datasets: this.chart.keaktifan.datasets
                },
                options: {
                    legend: { 
                        maxWidth: 10, 
                        position: 'bottom',
                        labels: {
                            fontFamily: "Poppins"
                        }
                    },
                    elements: { borderColor: '#D7DDF4' },
                    responsive: true,
                    maintainAspectRatio: false,
                },
            });
            
            var circleSecondChart = new Chart('login-chart', {
                    type: 'pie',
                    data: {
                    labels:  this.chart.login.labels,
                    datasets: this.chart.login.datasets
                },
                options: {
                    legend: { 
                        maxWidth: 10, 
                        position: 'bottom',
                        labels: {
                            fontFamily: "Poppins"
                        }
                    },
                    elements: { borderColor: '#D7DDF4' },
                    responsive: true,
                    maintainAspectRatio: false,
                },
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