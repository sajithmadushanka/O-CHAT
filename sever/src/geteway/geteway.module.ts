import { Module } from "@nestjs/common";
import { MyGeteWay } from "./geteway";

@Module({
    providers:[MyGeteWay]
})
export class GeteWayModule{}
