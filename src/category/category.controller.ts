import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { CategoryService } from './category.service';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { CreateCategoryDto } from './dto/create-category.dto';

@Controller('category')
export class CategoryController {

    constructor(private categoryService: CategoryService) { }

    @Get()
    getAll() {
        return this.categoryService.getAll();
    }

    @Get('/:id')
    findOneByID(@Param('id') id: string) {
        return { id: id }
    }

    @Post('create')
    create(@Body() createCategoryDto: CreateCategoryDto) {
        return { je: 'je' };
    }

    @Patch('update/:id')
    update(@Param('id') id: string, @Body() updateCategoryDto: UpdateCategoryDto) {
        return { je: 'je', id: id }
    }

    @Delete('delete/:id')
    delete(@Param('id') id: string) {
        return { msg: 'borrado kon esito', id: id }
    }

}