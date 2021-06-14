<template>
    <b-container fluid class="p-0">
        <div class="e-topbar">
            <b-row>
                <b-col cols="12 d-flex align-items-center text-center text-lg-left" lg="6">
                    <b-img src="/assets/logo.png" class="e-topbar-logo" fluid />
                    <div class="e-topbar-brand ">{{ appName }}</div>
                </b-col>
                <b-col cols="12 pt-2" lg="6">
                    <b-row>
                        <b-col cols="12 d-flex justify-content-center justify-content-lg-end align-items-center" lg="7" offset-lg="1">
                            <div><ph-calendar-blank class="phospor"/> {{ tanggalSekarang }}</div>
                        </b-col>
                        <b-col cols="12 d-flex justify-content-center justify-content-lg-end align-items-center" lg="4">
                            <b-dropdown right class="e-profile">
                                <template #button-content>
                                    {{ namaUser }} <ph-caret-down class="phospor ml-3"/>   
                                </template>
                                <b-dropdown-item @click="$router.push({ name: 'Login' })">Logout</b-dropdown-item>
                            </b-dropdown>
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
                                    <div class="e-square cursor-pointer" @click="$router.push({ name: 'Polda Jajaran | Executive' })">
                                        <div class="e-square-body">
                                            <div class="mb-1">{{ polda }}</div>
                                            <span>POLDA</span>
                                        </div>
                                    </div>
                                </b-col>
                                <b-col cols="12 pb-3 d-flex justify-content-center d-lg-block" lg="4">
                                    <div class="e-square e-square-dark">
                                        <div class="e-square-body">
                                            <div class="mb-1">{{ polres }}</div>
                                            <span>POLRES</span>
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
                        <b-col cols="12 py-3"><h4 class="font-weight-bold">AKTIVITAS {{ tanggalSekarang }} NASIONAL</h4></b-col>
                        <b-col cols="12 pr-0 pb-3 pb-lg-0" md="6" lg="3" @click="$router.push({ name: 'Kegiatan | Executive' })">
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
                        <b-col cols="12 pr-0 pb-3 pb-lg-0" md="6" lg="3" @click="$router.push({ name: 'Pengaduan | Executive' })">
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
                        <b-col cols="12 pr-0 pb-3 pb-lg-0" md="6" lg="3" @click="$router.push({ name: 'Kejadian | Executive' })">
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
                        <b-col cols="12 pr-0 pb-3 pb-lg-0" md="6" lg="3" @click="$router.push({ name: 'Darurat | Executive' })">
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
                        <b-col cols="12 py-3"><h4 class="font-weight-bold">LAKA LANTAS FEBRUARI</h4></b-col>
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
                        <b-col cols="12 py-3"><h4 class="font-weight-bold">DAKGAR LANTAS FEBRUARI</h4></b-col>
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
                        <b-col cols="12 py-3"><h4 class="font-weight-bold">LAPHAR LANTAS FEBRUARI</h4></b-col>
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
                        <b-col cols="12 py-3"><h4 class="font-weight-bold">KORLANTAS POLRI</h4></b-col>
                        <b-col cols="12">
                            <div class="e-box e-box-sm mb-3">
                                <h4 class="font-weight-bold text-center d-inline-block mb-4">DITKAMSEL KORLANTAS</h4>
                                <div class="e-box-info mb-3">
                                    <b-row>
                                        <b-col cols="12" lg="4 font-weight-bold"><h4>120</h4></b-col>
                                        <b-col cols="12" lg="8">Anggota</b-col>
                                    </b-row>
                                </div>
                                <div class="e-box-info mb-3">
                                    <b-row>
                                        <b-col cols="12" lg="4 font-weight-bold"><h4>15</h4></b-col>
                                        <b-col cols="12" lg="8">Kegiatan</b-col>
                                    </b-row>
                                </div>
                            </div>
                            <div class="e-box e-box-sm mb-3">
                                <h4 class="font-weight-bold text-center d-inline-block mb-4">DITREGIDENT KORLANTAS</h4>
                                <div class="e-box-info mb-3">
                                    <b-row>
                                        <b-col cols="12" lg="4 font-weight-bold"><h4>120</h4></b-col>
                                        <b-col cols="12" lg="8">Anggota</b-col>
                                    </b-row>
                                </div>
                                <div class="e-box-info mb-3">
                                    <b-row>
                                        <b-col cols="12" lg="4 font-weight-bold"><h4>15</h4></b-col>
                                        <b-col cols="12" lg="8">Kegiatan</b-col>
                                    </b-row>
                                </div>
                            </div>
                            <div class="e-box e-box-sm mb-3">
                                <h4 class="font-weight-bold text-center d-inline-block mb-4">DITGAKKUM KORLANTAS</h4>
                                <div class="e-box-info mb-3">
                                    <b-row>
                                        <b-col cols="12" lg="4 font-weight-bold"><h4>120</h4></b-col>
                                        <b-col cols="12" lg="8">Anggota</b-col>
                                    </b-row>
                                </div>
                                <div class="e-box-info mb-3">
                                    <b-row>
                                        <b-col cols="12" lg="4 font-weight-bold"><h4>15</h4></b-col>
                                        <b-col cols="12" lg="8">Kegiatan</b-col>
                                    </b-row>
                                </div>
                            </div>
                            <div class="e-box e-box-sm mb-3">
                                <h4 class="font-weight-bold text-center d-inline-block mb-4">PJR KORLANTAS</h4>
                                <div class="e-box-info mb-3">
                                    <b-row>
                                        <b-col cols="12" lg="4 font-weight-bold"><h4>120</h4></b-col>
                                        <b-col cols="12" lg="8">Anggota</b-col>
                                    </b-row>
                                </div>
                                <div class="e-box-info mb-3">
                                    <b-row>
                                        <b-col cols="12" lg="4 font-weight-bold"><h4>15</h4></b-col>
                                        <b-col cols="12" lg="8">Kegiatan</b-col>
                                    </b-row>
                                </div>
                            </div>
                            <div class="e-box e-box-sm mb-3">
                                <h4 class="font-weight-bold text-center d-inline-block mb-4">BAGTIK KORLANTAS</h4>
                                <div class="e-box-info mb-3">
                                    <b-row>
                                        <b-col cols="12" lg="4 font-weight-bold"><h4>120</h4></b-col>
                                        <b-col cols="12" lg="8">Anggota</b-col>
                                    </b-row>
                                </div>
                                <div class="e-box-info mb-3">
                                    <b-row>
                                        <b-col cols="12" lg="4 font-weight-bold"><h4>15</h4></b-col>
                                        <b-col cols="12" lg="8">Kegiatan</b-col>
                                    </b-row>
                                </div>
                            </div>
                            <div class="e-box e-box-sm mb-3">
                                <h4 class="font-weight-bold text-center d-inline-block mb-4">RENMIN KORLANTAS</h4>
                                <div class="e-box-info mb-3">
                                    <b-row>
                                        <b-col cols="12" lg="4 font-weight-bold"><h4>120</h4></b-col>
                                        <b-col cols="12" lg="8">Anggota</b-col>
                                    </b-row>
                                </div>
                                <div class="e-box-info mb-3">
                                    <b-row>
                                        <b-col cols="12" lg="4 font-weight-bold"><h4>15</h4></b-col>
                                        <b-col cols="12" lg="8">Kegiatan</b-col>
                                    </b-row>
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
            polda: 34,
            polres: 544,
            anggota: 90000,
            kesatuan: 32,
            jajaran: 32,
            personil: 32,
            kegiatan: 32,
            pengaduan: 32,
            kejadian: 32,
            darurat: 32,
        }
    },
    computed: {
        tanggalSekarang () {
            return format(parseISO(formatISO(new Date())), 'd MMMM yyyy', {locale: id})
        },
        namaUser () {
            return 'Kakorlantas'
        }
    },
}
</script>