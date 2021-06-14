<template>
    <b-container fluid class="p-0">
         <div class="e-topbar transparent">
            <b-row>
                <b-col cols="12 d-flex align-items-center" lg="6">
                    <h4><router-link to="/jajaran"><ph-caret-left class="phospor" /></router-link> <span class="semibold ml-3">{{ $router.history.current.params.polda }}</span></h4>
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
                        <b-col cols="12 py-3"><h4 class="font-weight-bold">KUAT ANGGOTA</h4></b-col>
                        <b-col cols="12">
                            <b-row>
                                <b-col cols="12 pb-3 d-flex justify-content-center d-lg-block" lg="4">
                                    <div class="e-square">
                                        <div class="e-square-body">
                                            <div class="mb-1">{{ polres }}</div>
                                            <span>POLRES</span>
                                        </div>
                                    </div>
                                </b-col>
                                <b-col cols="12 pb-3 d-flex justify-content-center d-lg-block" lg="4">
                                    <div class="e-square e-square-dark">
                                        <div class="e-square-body">
                                            <div class="mb-1">{{ kegiatan }}</div>
                                            <span>KEGIATAN</span>
                                        </div>
                                    </div>
                                </b-col>
                                <b-col cols="12 pb-3 d-flex justify-content-center d-lg-block" lg="4">
                                    <div class="e-square">
                                        <div class="e-square-body">
                                            <div class="mb-1">{{ anggota }}</div>
                                            <span>ANGGOTA</span>
                                        </div>
                                    </div>
                                </b-col>
                            </b-row>
                        </b-col>
                    </b-row>
                    <b-row class="mt-4">
                        <b-col cols="12 py-3"><h4 class="font-weight-bold strtoupper">AKTIVITAS {{ formatTanggal(tanggalSekarang) }} NASIONAL</h4></b-col>
                        <b-col cols="12 pr-0 pb-3 pb-lg-0" md="6" lg="3" @click="$router.push({ name: 'Kegiatan | Detail | Polda Jajaran | Executive', params: { polda: $router.history.current.params.polda } })">
                            <div class="e-tile">
                                <div class="e-tile-body">
                                    <div>{{ kegiatan }}</div>
                                    <span>Kegiatan</span>
                                </div>
                                <div class="e-tile-icon e-tile-icon-primary">
                                    <div>
                                        <ph-shield-chevron class="phospor"/>
                                    </div>
                                </div>
                            </div>
                        </b-col>
                        <b-col cols="12 pr-0 pb-3 pb-lg-0" md="6" lg="3" @click="$router.push({ name: 'Pengaduan | Detail | Polda Jajaran | Executive', params: { polda: $router.history.current.params.polda } })">
                            <div class="e-tile">
                                <div class="e-tile-body">
                                    <div>{{ pengaduan }}</div>
                                    <span>Pengaduan</span>
                                </div>
                                <div class="e-tile-icon e-tile-icon-success">
                                    <div>
                                        <ph-newspaper-clipping class="phospor"/>
                                    </div>
                                </div>
                            </div>
                        </b-col>
                        <b-col cols="12 pr-0 pb-3 pb-lg-0" md="6" lg="3" @click="$router.push({ name: 'Kejadian | Detail | Polda Jajaran | Executive', params: { polda: $router.history.current.params.polda } })">
                            <div class="e-tile">
                                <div class="e-tile-body">
                                    <div>{{ kejadian }}</div>
                                    <span>Kejadian</span>
                                </div>
                                <div class="e-tile-icon e-tile-icon-danger">
                                    <div>
                                        <ph-activity class="phospor"/>
                                    </div>
                                </div>
                            </div>
                        </b-col>
                        <b-col cols="12 pr-0 pb-3 pb-lg-0" md="6" lg="3" @click="$router.push({ name: 'Darurat | Detail | Polda Jajaran | Executive', params: { polda: $router.history.current.params.polda } })">
                            <div class="e-tile">
                                <div class="e-tile-body">
                                    <div>{{ darurat }}</div>
                                    <span>Darurat</span>
                                </div>
                                <div class="e-tile-icon e-tile-icon-warning">
                                    <div>
                                        <ph-shield-warning class="phospor"/>
                                    </div>
                                </div>
                            </div>
                        </b-col>
                    </b-row>
                    <b-row class="mt-4">
                        <b-col cols="12 py-3"><h4 class="font-weight-bold">LAKA LANTAS {{ getBulan(tanggalSekarang) }}</h4></b-col>
                        <b-col cols="12 text-center pb-4">
                            <b-badge class="mx-2 px-4 py-1" variant="success text-success"> - </b-badge> 2020
                            <b-badge class="mx-2 px-4 py-1" variant="primary text-primary"> - </b-badge> 2021
                        </b-col>
                        <b-col cols="12 pb-3 d-flex justify-content-center d-lg-block" lg="3">
                            <div class="e-square">
                                <b-progress height="1.4rem" :max="100" class="mb-3 e-progress" variant="success">
                                    <b-progress-bar :value="30">
                                        <span><strong>80</strong></span>
                                    </b-progress-bar>
                                </b-progress>
                                <b-progress height="1.4rem" :max="100" class="mb-3 e-progress">
                                    <b-progress-bar :value="63">
                                        <span><strong>170</strong></span>
                                    </b-progress-bar>
                                </b-progress>
                                <div class="text-center text-danger font-weight-bold">50%</div>
                                <div class="text-center">Jumlah Kejadian</div>
                            </div>
                        </b-col>
                        <b-col cols="12 pb-3 d-flex justify-content-center d-lg-block" lg="3">
                            <div class="e-square e-square-dark">
                                <b-progress height="1.4rem" :max="100" class="mb-3 e-progress" variant="success">
                                    <b-progress-bar :value="30">
                                        <span><strong>80</strong></span>
                                    </b-progress-bar>
                                </b-progress>
                                <b-progress height="1.4rem" :max="100" class="mb-3 e-progress">
                                    <b-progress-bar :value="63">
                                        <span><strong>170</strong></span>
                                    </b-progress-bar>
                                </b-progress>
                                <div class="text-center text-danger font-weight-bold">50%</div>
                                <div class="text-center">Meninggal Dunia</div>
                            </div>
                        </b-col>
                        <b-col cols="12 pb-3 d-flex justify-content-center d-lg-block" lg="3">
                            <div class="e-square">
                                <b-progress height="1.4rem" :max="100" class="mb-3 e-progress" variant="success">
                                    <b-progress-bar :value="30">
                                        <span><strong>80</strong></span>
                                    </b-progress-bar>
                                </b-progress>
                                <b-progress height="1.4rem" :max="100" class="mb-3 e-progress">
                                    <b-progress-bar :value="63">
                                        <span><strong>170</strong></span>
                                    </b-progress-bar>
                                </b-progress>
                                <div class="text-center text-danger font-weight-bold">50%</div>
                                <div class="text-center">Luka Berat</div>
                            </div>
                        </b-col>
                        <b-col cols="12 pb-3 d-flex justify-content-center d-lg-block" lg="3">
                            <div class="e-square e-square-dark">
                                <b-progress height="1.4rem" :max="100" class="mb-3 e-progress" variant="success">
                                    <b-progress-bar :value="30">
                                        <span><strong>80</strong></span>
                                    </b-progress-bar>
                                </b-progress>
                                <b-progress height="1.4rem" :max="100" class="mb-3 e-progress">
                                    <b-progress-bar :value="63">
                                        <span><strong>170</strong></span>
                                    </b-progress-bar>
                                </b-progress>
                                <div class="text-center text-danger font-weight-bold">50%</div>
                                <div class="text-center">Luka Ringan</div>
                            </div>
                        </b-col>
                    </b-row>
                    <b-row class="mt-4">
                        <b-col cols="12 py-3"><h4 class="font-weight-bold">DAKGAR LANTAS {{ getBulan(tanggalSekarang) }}</h4></b-col>
                        <b-col cols="12 text-center pb-4">
                            <b-badge class="mx-2 px-4 py-1" variant="success text-success"> - </b-badge> 2020
                            <b-badge class="mx-2 px-4 py-1" variant="primary text-primary"> - </b-badge> 2021
                        </b-col>
                        <b-col cols="12 pb-3 d-flex justify-content-center d-lg-block" lg="6">
                            <div class="e-square w-100">
                                <b-progress height="1.4rem" :max="100" class="mb-3 e-progress" variant="success">
                                    <b-progress-bar :value="30">
                                        <span><strong>80</strong></span>
                                    </b-progress-bar>
                                </b-progress>
                                <b-progress height="1.4rem" :max="100" class="mb-3 e-progress">
                                    <b-progress-bar :value="63">
                                        <span><strong>170</strong></span>
                                    </b-progress-bar>
                                </b-progress>
                                <div>Tilang</div>
                            </div>
                        </b-col>
                        <b-col cols="12 pb-3 d-flex justify-content-center d-lg-block" lg="6">
                            <div class="e-square e-square-dark w-100">
                                <b-progress height="1.4rem" :max="100" class="mb-3 e-progress" variant="success">
                                    <b-progress-bar :value="30">
                                        <span><strong>80</strong></span>
                                    </b-progress-bar>
                                </b-progress>
                                <b-progress height="1.4rem" :max="100" class="mb-3 e-progress">
                                    <b-progress-bar :value="63">
                                        <span><strong>170</strong></span>
                                    </b-progress-bar>
                                </b-progress>
                                <div>Teguran</div>
                            </div>
                        </b-col>
                    </b-row>
                    <b-row class="mt-4">
                        <b-col cols="12 py-3"><h4 class="font-weight-bold">LAPHAR LANTAS {{ getBulan(tanggalSekarang) }}</h4></b-col>
                        <b-col cols="12 text-center pb-4">
                            <b-badge class="mx-2 px-4 py-1" variant="success text-success"> - </b-badge> 2020
                            <b-badge class="mx-2 px-4 py-1" variant="primary text-primary"> - </b-badge> 2021
                        </b-col>
                        <b-col cols="12 pb-3 d-flex justify-content-center d-lg-block" lg="4">
                            <div class="e-square">
                                <b-progress height="1.4rem" :max="100" class="mb-3 e-progress" variant="success">
                                    <b-progress-bar :value="30">
                                        <span><strong>80</strong></span>
                                    </b-progress-bar>
                                </b-progress>
                                <b-progress height="1.4rem" :max="100" class="mb-3 e-progress">
                                    <b-progress-bar :value="63">
                                        <span><strong>170</strong></span>
                                    </b-progress-bar>
                                </b-progress>
                                <div>Penjagaan lalu lintas</div>
                            </div>
                        </b-col>
                        <b-col cols="12 pb-3 d-flex justify-content-center d-lg-block" lg="4">
                            <div class="e-square e-square-dark">
                                <b-progress height="1.4rem" :max="100" class="mb-3 e-progress" variant="success">
                                    <b-progress-bar :value="30">
                                        <span><strong>80</strong></span>
                                    </b-progress-bar>
                                </b-progress>
                                <b-progress height="1.4rem" :max="100" class="mb-3 e-progress">
                                    <b-progress-bar :value="63">
                                        <span><strong>170</strong></span>
                                    </b-progress-bar>
                                </b-progress>
                                <div>Pengaturan lalu lintas</div>
                            </div>
                        </b-col>
                        <b-col cols="12 pb-3 d-flex justify-content-center d-lg-block" lg="4">
                            <div class="e-square">
                                <b-progress height="1.4rem" :max="100" class="mb-3 e-progress" variant="success">
                                    <b-progress-bar :value="30">
                                        <span><strong>80</strong></span>
                                    </b-progress-bar>
                                </b-progress>
                                <b-progress height="1.4rem" :max="100" class="mb-3 e-progress">
                                    <b-progress-bar :value="63">
                                        <span><strong>170</strong></span>
                                    </b-progress-bar>
                                </b-progress>
                                <div>Pengawalan lalu lintas</div>
                            </div>
                        </b-col>
                        <b-col cols="12 pb-3 d-flex justify-content-center d-lg-block" lg="4">
                            <div class="e-square e-square-dark">
                                <b-progress height="1.4rem" :max="100" class="mb-3 e-progress" variant="success">
                                    <b-progress-bar :value="30">
                                        <span><strong>80</strong></span>
                                    </b-progress-bar>
                                </b-progress>
                                <b-progress height="1.4rem" :max="100" class="mb-3 e-progress">
                                    <b-progress-bar :value="63">
                                        <span><strong>170</strong></span>
                                    </b-progress-bar>
                                </b-progress>
                                <div>Patroli lalu lintas</div>
                            </div>
                        </b-col>
                        <b-col cols="12 pb-3 d-flex justify-content-center d-lg-block" lg="4">
                            <div class="e-square">
                                <b-progress height="1.4rem" :max="100" class="mb-3 e-progress" variant="success">
                                    <b-progress-bar :value="30">
                                        <span><strong>80</strong></span>
                                    </b-progress-bar>
                                </b-progress>
                                <b-progress height="1.4rem" :max="100" class="mb-3 e-progress">
                                    <b-progress-bar :value="63">
                                        <span><strong>170</strong></span>
                                    </b-progress-bar>
                                </b-progress>
                                <div>PAM Rute VVIP</div>
                            </div>
                        </b-col>
                        <b-col cols="12 pb-3 d-flex justify-content-center d-lg-block" lg="4">
                            <div class="e-square e-square-dark">
                                <b-progress height="1.4rem" :max="100" class="mb-3 e-progress" variant="success">
                                    <b-progress-bar :value="30">
                                        <span><strong>80</strong></span>
                                    </b-progress-bar>
                                </b-progress>
                                <b-progress height="1.4rem" :max="100" class="mb-3 e-progress">
                                    <b-progress-bar :value="63">
                                        <span><strong>170</strong></span>
                                    </b-progress-bar>
                                </b-progress>
                                <div>PAM TAMU NEGARA</div>
                            </div>
                        </b-col>
                        <b-col cols="12 pb-3 d-flex justify-content-center d-lg-block" lg="4">
                            <div class="e-square">
                                <b-progress height="1.4rem" :max="100" class="mb-3 e-progress" variant="success">
                                    <b-progress-bar :value="30">
                                        <span><strong>80</strong></span>
                                    </b-progress-bar>
                                </b-progress>
                                <b-progress height="1.4rem" :max="100" class="mb-3 e-progress">
                                    <b-progress-bar :value="63">
                                        <span><strong>170</strong></span>
                                    </b-progress-bar>
                                </b-progress>
                                <div>PAM RUTIN</div>
                            </div>
                        </b-col>
                        <b-col cols="12 pb-3 d-flex justify-content-center d-lg-block" lg="4">
                            <div class="e-square e-square-dark">
                                <b-progress height="1.4rem" :max="100" class="mb-3 e-progress" variant="success">
                                    <b-progress-bar :value="30">
                                        <span><strong>80</strong></span>
                                    </b-progress-bar>
                                </b-progress>
                                <b-progress height="1.4rem" :max="100" class="mb-3 e-progress">
                                    <b-progress-bar :value="63">
                                        <span><strong>170</strong></span>
                                    </b-progress-bar>
                                </b-progress>
                                <div>REKAYASA</div>
                            </div>
                        </b-col>
                    </b-row>
                </b-col>
                <b-col cols="12 pb-3 pb-lg-0" lg="4">
                    <b-row>
                        <b-col cols="12 py-3 text-center"><h4 class="font-weight-bold">{{ $router.history.current.params.polda }}</h4></b-col>
                        <b-col cols="12 mb-3">
                            <b-row>
                                <b-col cols="12" lg="4" offset-lg="4">
                                    <img src="/assets/dummy/polda-jatim.png" class="w-100" alt="">
                                </b-col>
                            </b-row>
                        </b-col>
                        <b-col cols="12 mb-3">
                            <div class="e-square cursor-pointer">
                                <div class="e-square-body">
                                    <div class="mb-1">25.289.900</div>
                                    <span>KENDARAAN</span>
                                </div>
                            </div>
                        </b-col>
                        <b-col cols="12 mb-3">
                            <div class="e-square cursor-pointer">
                                <div class="e-square-body">
                                    <div class="mb-1">21.000.000</div>
                                    <span>PENGEMUDI</span>
                                </div>
                            </div>
                        </b-col>
                        <b-col cols="12 mb-3">
                            <div class="e-square cursor-pointer">
                                <div class="e-square-body">
                                    <div class="mb-1">40.000.000</div>
                                    <span>PENDUDUK</span>
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
import { format, formatISO, parseISO } from 'date-fns'
import id from 'date-fns/locale/id'
var Chart = require('chart.js')
export default {
    name: 'dashboard',
    data () {
        return {
            appName: appName,
            polres: 34,
            anggota: 700,
            kegiatan: 544,
            kesatuan: 32,
            jajaran: 32,
            personil: 32,
            pengaduan: 32,
            kejadian: 32,
            darurat: 32,
            tanggalSekarang: new Date,
        }
    },
    computed: {
        namaUser () {
            return 'Kakorlantas'
        }
    },
    methods: {
        formatTanggal (tanggal) {
            return format(parseISO(formatISO(tanggal)), 'd MMMM yyyy', {locale: id})
        },
        getBulan (tanggal) {
            return format(parseISO(formatISO(tanggal)), 'MMMM', {locale: id})
        },
    },
}
</script>