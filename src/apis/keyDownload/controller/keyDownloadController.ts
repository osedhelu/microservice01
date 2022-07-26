import { Body, Controller, HttpException, Post } from '@nestjs/common';
import { ApiBearerAuth, ApiProperty, ApiTags } from '@nestjs/swagger';
class Props {
  @ApiProperty({ required: true, default: '' })
  serial: string
  @ApiProperty({ required: true, default: '' })
  version: string
  @ApiProperty({ required: true, default: '' })
  kek: string
}

@ApiBearerAuth()
@ApiTags('keyDownload')
@Controller('keyDownload')
export class keyDownloadController {
  constructor() { }
  @Post('/cryptographicKeys')
  async getCryptographic(@Body() body: Props): Promise<any> {
    const { kek, serial, version } = body
    if (kek == "" || serial == '' || version == "") {
      return new HttpException("must send all parameters", 402)
    }
    return {
      "keys": [
        "90A23A1AF1AC32B218B8978E0E5E0703",
        "8D0588",
        "1606200012",
        "112B033F5E4F89A4CAA16DEC120F9B3B",
        "FCAE7F",
        "2201",
        "BA27DB49E5C82FB6385D74848AD79ABA",
        "5E9341",
        "2202",
        "F6DECA1DB8616C4B7B8086D6F82653C9",
        "C1EBA5",
        "2203",
        "46B051933BDE8B0469868D7F0E2F1E6A",
        "50A534",
        "2204"
      ],
      "hash": "7a+zGtOr82THJ2bg9On6Jieh/mf8lwQ9zI4="
    }
  }
}
