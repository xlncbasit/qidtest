import { Controller, Get } from '@nestjs/common';
import { AnalysisService } from './analysis.service';

@Controller('analysis')
export class AnalysisController {
  constructor(private analysisService: AnalysisService) {}

  @Get('services')
  getAllBillingsWithCosts() {
    return this.analysisService.getAllBillingsWithCosts();
  }
}