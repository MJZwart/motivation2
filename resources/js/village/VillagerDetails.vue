<template>
    <table>
                <tbody>
                    <tr>
                        <td>Farmers:</td>
                        <td>{{ getVillage.farmer }}</td>
                    </tr>
                    <tr>
                        <td>Labourers:</td>
                        <td>{{ getVillage.labourer }}</td>
                    </tr>
                    <tr>
                        <td>Toolsmith:</td>
                        <td>{{ getVillage.toolsmith }}</td>
                    </tr>
                    <tr>
                        <td>Artists:</td>
                        <td>{{ getVillage.artist }}</td>
                    </tr>
                    <tr>
                        <td>Researchers:</td>
                        <td>{{ getVillage.researcher }}</td>
                    </tr>
                    <tr>
                        <td>Merchants:</td>
                        <td>{{ getVillage.merchant }}</td>
                    </tr>
                </tbody>
            </table>
</template>

<script setup lang="ts">
import { getVillage } from '../service/villageRepository';


</script>